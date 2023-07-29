import CreateCategoryApi from "@/api/admin/categories/Create";
import DeleteCategoryApi from "@/api/admin/categories/Delete";
import EditCategoryApi from "@/api/admin/categories/Edit";
import GetAllCategoryApi from "@/api/admin/categories/GetAll";
import { Button } from "@/components";
import Alert from "@/components/atoms/Alert";
import DashboardCard from "@/components/atoms/DashboardCard";
import Input from "@/components/atoms/Input";
import CategoryItem from "@/components/molecules/CategoryItem";
import Modals from "@/components/organisms/admin/Modals";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

const CompetitionCategory = () => {
  const [isHitApi, setIsHitApi] = useState(false);
  const [isHitAll, setIsHitAll] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [competitionName, setCompetitionName] = useState("");
  const [Message, setMessage] = useState("");
  const [isSucces, setIsSucces] = useState("");
  const [categories, setCategories] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    getAll();
  }, []);
  const onCreate = (e) => {
    e.preventDefault();
    if (isHitApi) return;
    setIsHitApi(true);
    CreateCategoryApi({ competitionName }).then((res) => {
      //console.log(res);
      setIsHitApi(false);
      if (res.status == 1) {
        setMessage(Message);
        setIsSucces(true);
        getAll();
        setIsModal(false);
        setCompetitionName("");
        setMessage(res.message);
        setTimeout(() => {
          setIsSucces(false);
        }, 3000);
      } else if (res.status == 0) {
      }
    });
    // .catch((err) => //console.log(err));
  };
  const onEdit = (e) => {
    e.preventDefault();
    EditCategoryApi({ id, name: competitionName }).then((res) => {
      //console.log(res);
      setIsModalEdit(false);
      getAll();
    });
  };
  const onDelete = (e) => {
    e.preventDefault();
    DeleteCategoryApi({ id }).then((res) => {
      //console.log(res);
      setIsDelete(false);
      getAll();
    });
  };
  const getAll = () => {
    setIsHitAll(true);
    GetAllCategoryApi().then((res) => {
      setCategories(res.data?.categories);
      setIsHitAll(false);
    });
  };
  const showDelete = (id) => {
    setId(id);
    setIsDelete(true);
  };
  const showCreate = () => {
    setIsModal(true);
    setCompetitionName("");
  };
  const showEdit = (id, name) => {
    setIsModalEdit(true);
    setCompetitionName(name);
    setId(id);
  };
  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
        <AiOutlineCheckCircle className="text-green-400 text-xl " />
        <p>{Message}</p>
      </Alert>
      <PopupDelete
        isModal={isDelete}
        onDelete={onDelete}
        setIsModal={setIsDelete}
      />
      <PopupTambah
        competitionName={competitionName}
        isModal={isModal}
        onCreate={onCreate}
        setCompetitionName={setCompetitionName}
        setIsModal={setIsModal}
      />
      <PopupEdit
        competitionName={competitionName}
        isModal={isModalEdit}
        onEdit={onEdit}
        setCompetitionName={setCompetitionName}
        setIsModal={setIsModalEdit}
      />
      <DashboardAdminTemplate title={"Categories"}>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <p>
              <BiHomeAlt className="text-gray-400" />
            </p>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Kategori Lomba</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl fomt-semibold">Kategori Lomba</h1>
            <Button
              onClick={() => showCreate()}
              isSquare
              color={"blue"}
              additionals={"flex items-center gap-2"}
            >
              <FiPlus className="text-white" />
              <p>Buat Kategori</p>
            </Button>
          </div>
        </DashboardCard>
        <DashboardCard>
          <ul className="flex flex-col space-y-3">
            {isHitAll ? (
              <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
            ) : (
              categories?.map((category, index) => (
                <CategoryItem
                  onDelete={() => showDelete(category?.id)}
                  onEdit={() => showEdit(category?.id, category?.name)}
                  name={category?.name}
                  key={index}
                  id={category.id}
                />
              ))
            )}
          </ul>
        </DashboardCard>
      </DashboardAdminTemplate>
    </div>
  );
};

export default CompetitionCategory;

const PopupDelete = ({ onDelete, isModal, setIsModal }) => {
  return (
    <Modals onSubmit={onDelete} isModal={isModal}>
      <h1 className="text-xl mb-2">Hapus Kategori</h1>
      <div className="flex items-center space-x-2 mt-4 justify-end">
        <Button
          type="button"
          onClick={() => setIsModal(false)}
          isSquare
          color={"bluelight"}
        >
          Batal
        </Button>
        <Button type="submit" isSquare color={"red"}>
          Hapus
        </Button>
      </div>
    </Modals>
  );
};

const PopupEdit = ({
  onEdit,
  isModal,
  competitionName,
  setCompetitionName,
  setIsModal,
}) => {
  return (
    <Modals onSubmit={onEdit} isModal={isModal}>
      <h1 className="text-xl mb-2">Edit Kategori</h1>
      <Input
        required
        value={competitionName}
        onChange={(e) => setCompetitionName(e.target.value)}
      />
      <div className="flex items-center space-x-2 mt-4 justify-end">
        <Button
          type="button"
          onClick={() => setIsModal(false)}
          isSquare
          color={"bluelight"}
        >
          Batal
        </Button>
        <Button type="submit" isSquare color={"blue"}>
          Simpan
        </Button>
      </div>
    </Modals>
  );
};

const PopupTambah = ({
  onCreate,
  isModal,
  competitionName,
  setCompetitionName,
  setIsModal,
}) => {
  return (
    <Modals onSubmit={onCreate} isModal={isModal}>
      <h1 className="text-xl mb-2">Tambah Kategori</h1>
      <Input
        required
        value={competitionName}
        onChange={(e) => setCompetitionName(e.target.value)}
      />
      <div className="flex items-center space-x-2 mt-4 justify-end">
        <Button
          type="button"
          onClick={() => setIsModal(false)}
          isSquare
          color={"bluelight"}
        >
          Batal
        </Button>
        <Button type="submit" isSquare color={"blue"}>
          Simpan
        </Button>
      </div>
    </Modals>
  );
};
