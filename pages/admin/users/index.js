import React, { useEffect, useState } from "react";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import DataTable from "react-data-table-component";
import {
  FiCheckCircle,
  FiEdit,
  FiEye,
  FiTrash,
  FiXCircle,
} from "react-icons/fi";
import GetAllUserApi from "@/api/user/GetAllUser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PopUp } from "@/components/organisms/details/CompetitionDetails";
import Text from "@/components/atoms/Text";
import { Button } from "@/components";
import DeleteUserApi from "@/api/user/Delete";

export default function Users() {
  const [isHitApi, setIsHitApi] = useState(false);
  const [isHitDelete, setIsHitDelete] = useState(false);
  const [fromApi, setFromApi] = useState([]);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [uid, setUid] = useState("");
  const [profile, setProfile] = useState("");
  const [user, setUser] = useState([]);

  const columns = [
    {
      name: "Nama",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Nomor Telp",
      selector: (row) => row.phone,
    },
    {
      name: "Terverifikasi",
      selector: (row) => row.isVerified,
    },
    {
      name: "Aksi",
      selector: (row) => row.action,
    },
  ];
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setIsHitApi(true);
    GetAllUserApi().then((res) => {
      console.log(res);
      if (res.status == 1) {
        setFromApi(res.data.users);
        setIsHitApi(false);
      }
    });
  };
  const handleOpenDelete = (id) => {
    setIsOpenDelete(true);
    setUid(id);
  };
  const handleDelete = () => {
    setIsHitDelete(true);
    DeleteUserApi({ uid }).then((res) => {
      console.log(res);
      if (res.status == 1) {
        setIsHitDelete(false);
        setIsOpenDelete(false);
        getUsers();
      }
    });
  };
  const handleOpenDetail = (id) => {
    const selectedUser = fromApi.find((item) => item.id == id);
    if (selectedUser) {
      setProfile(selectedUser.participant?.avatar);
      const items = [
        {
          label: "Nama",
          value: selectedUser.name,
        },
        {
          label: "Email",
          value: selectedUser.email,
        },
        {
          label: "Nomor Telepon",
          value: selectedUser.phone,
        },
        {
          label: "Terverifikasi",
          value: selectedUser.email_verified_at ? "Sudah" : "Belum",
        },
        {
          label: "Gender",
          value: selectedUser?.participant?.gender ?? "-",
        },
        {
          label: "Institusi",
          value: selectedUser?.participant?.institution ?? "-",
        },
        {
          label: "NIM/NIS",
          value: selectedUser?.participant?.student_id_number ?? "-",
        },
      ];
      setUser(items);
      setIsOpenDetail(true);
    }
  };
  const data = fromApi.map(({ name, email, phone, email_verified_at, id }) => ({
    name: name,
    email: email,
    phone: phone,
    isVerified: email_verified_at ? (
      <FiCheckCircle className="text-green-500" />
    ) : (
      <FiXCircle className="text-red" />
    ),
    action: (
      <Action
        onDelete={() => handleOpenDelete(id)}
        onDetail={() => handleOpenDetail(id)}
      />
    ),
  }));
  return (
    <>
      <PopUp isModal={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
        <Text size={"cardtitle"}>
          Apakah anda yakin akan menghapus user ini?
        </Text>
        <Button
          onClick={() => handleDelete()}
          additionals={"mt-8 w-full"}
          isSquare
        >
          {isHitDelete ? <Loader className="text-white" /> : "Hapus"}
        </Button>
      </PopUp>
      <PopUp
        className={"overflow-y-scroll scrollbar"}
        isModal={isOpenDetail}
        onClose={() => setIsOpenDetail()}
      >
        {profile && (
          <img
            src={profile}
            alt="profile"
            width={1080}
            height={1080}
            className="w-full mb-3 mx-auto rounded-md h-36 object-cover"
          />
        )}
        {user.map(({ label, value }, idx) => (
          <TopBottomText key={idx} label={label} value={value} />
        ))}
      </PopUp>
      <DashboardAdminTemplate>
        <div className="w-11/12 mx-auto">
          <DataTable
            pagination
            title="List User"
            progressPending={isHitApi}
            progressComponent={<Loader />}
            columns={columns}
            data={data}
          />
        </div>
      </DashboardAdminTemplate>
    </>
  );
}

const Action = ({ onDelete, onDetail }) => {
  return (
    <div className="flex space-x-3 w-full text-2xl">
      <FiEye
        onClick={onDetail}
        className="p-1 text-blue-500 bg-blue-500/10 rounded-md cursor-pointer"
      />
      {/* <FiEdit className="p-1 text-green-500 bg-green-500/10 rounded-md cursor-pointer" /> */}
      <FiTrash
        onClick={onDelete}
        className="p-1 text-red bg-red/10 rounded-md cursor-pointer"
      />
    </div>
  );
};

const Loader = ({ className = "text-black" }) => {
  return (
    <AiOutlineLoading3Quarters
      className={`${className} text-lg animate-spin`}
    />
  );
};

const TopBottomText = ({ label, value }) => {
  return (
    <div className="my-1 text-left w-full">
      <Text>{label}</Text>
      <Text size={"description"}>{value}</Text>
    </div>
  );
};
