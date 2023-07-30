import React, { useEffect, useState } from "react";
import DashboardUserTemplate from "@/components/pagetemplate/DashboardUser";
import DashboardCard from "@/components/atoms/DashboardCard";
import { BiHomeAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

import InputTitle from "@/components/molecules/InputTitle";
import InputPhone from "@/components/atoms/InputPhone";
import Text from "@/components/atoms/Text";
import InputOptions from "@/components/atoms/InputOptions";

import InputRadio from "@/components/atoms/InputRadio";
import GetDetailUser from "@/api/user/GetDetailUser";
import EditUser from "@/api/user/Edit";
import InputPhotoIdentity from "@/components/atoms/InputPhotoIdentity";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [simpan, setSimpan] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentId, setStudentId] = useState("");
  const [photoIdentity, setPhotoIdentity] = useState(null);
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [twibbon, setTwibbon] = useState(null);
  const [institution, setInstitution] = useState("");

  useEffect(() => {
    GetDetailUser()
      .then(async (res) => {
        const user = res.data.user;

        setUserData(user || "");
        setName(user.name || "");
        setEmail(user.email || "");
        setPhone(user.phone || "");
        setStudentId(user.participant.student_id_number || "");
        setInstitution(user.participant.institution || "");
        setGrade(user.participant.grade || "");
        setGender(user.participant.gender || "");

        if (user.participant.avatar) {
          setAvatar(user.participant.avatar);
        }

        if (user.participant.photo_identity) {
          setPhotoIdentity(user.participant.photo_identity);
        }

        if (user.participant.twibbon) {
          setTwibbon(user.participant.twibbon);
        }
        setLoading(false);
      })

      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  const handleSave = async () => {
    setSimpan(true);
    if (!name) {
      console.error("Name must be filled");
      return;
    }
    try {
      const data = {
        fullName: name,
        email: email,
        phone: phone,
        grade: grade,
        gender: gender,
        avatar: avatar,
        studentId: studentId,
        institution: institution,
        photoIdentity: photoIdentity,
        twibbon: twibbon,
      };

      const response = await EditUser(data);
      console.log(response);
      // Do something with the response...
    } catch (error) {
      console.error(error);
      // Handle error...
    }
    setSimpan(false);
  };

  //cek mime

  return (
    <div>
      <DashboardUserTemplate>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <Link href={"/"}>
              <BiHomeAlt className="text-gray-400" />
            </Link>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Profile</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl font-semibold">Profile</h1>
          </div>
        </DashboardCard>
        {loading ? (
          <div className="flex justify-center items-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="px-10 rounded-lg bg-white p-5 w-11/12 flex flex-col gap-2 mx-auto">
            <InputTitle
              required={false}
              title={"Nama Lengkap"}
              type="text"
              value={name}
              placeholder={"Masukan nama lengkap"}
              onChange={(e) => setName(e.target.value)}
            />
            <InputTitle
              required={false}
              title={"Email"}
              type="email"
              disabled
              value={email}
              placeholder={"Masukan email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text>No Telepon</Text>
            <InputPhone
              placeholder="88226989100"
              value={phone}
              required={false}
              maxLength={12}
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputOptions
              options={["Pilih jenjang pendidikan", "pelajar", "mahasiswa"]}
              grade={grade}
              setGrade={setGrade}
            />
            <InputTitle
              required={false}
              title={"Nama Jenjang Pendidikan / Instansi"}
              type="text"
              placeholder={"Nama Instansi Pendidikan"}
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
            <Text>Avatar</Text>
            <InputPhotoIdentity
              photo={avatar}
              setPhoto={setAvatar}
              initialPhotoUrl={avatar}
            />
            <InputTitle
              required={false}
              title={"NIM/NISN"}
              type="text"
              placeholder={"Masukan NIM/NISN"}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />

            <InputRadio gender={gender} setGender={setGender} />
            <Text>Foto Identitas</Text>
            <InputPhotoIdentity
              photo={photoIdentity}
              setPhoto={setPhotoIdentity}
              initialPhotoUrl={photoIdentity}
            />
            <Text>Twibbon</Text>
            <InputPhotoIdentity
              photo={twibbon}
              setPhoto={setTwibbon}
              initialPhotoUrl={twibbon}
            />

            <div className="flex gap-4">
              <button className="py-2 px-4 bg-slate-700 rounded-md hover:bg-slate-900 text-white font-semibold">
                Batal
              </button>
              <button
                onClick={handleSave}
                disabled={!name || simpan}
                className={`py-2 px-4 rounded-md text-white flex justify-center items-center font-semibold ${
                  name && !simpan
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-orange-700 cursor-not-allowed py-2 px-4 w-24"
                }`}
              >
                {simpan ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "Simpan"
                )}
              </button>
            </div>
          </div>
        )}
      </DashboardUserTemplate>
    </div>
  );
}

export default Profile;
