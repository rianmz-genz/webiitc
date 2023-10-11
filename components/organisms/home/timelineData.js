const timelineData = {
  importantDates: [
    // date hari penting
    new Date("2023-08-01"),
    new Date("2023-08-15"),
    new Date("2023-09-10"),
    new Date("2023-09-22"),
    new Date("2023-09-28"),
    new Date("2023-10-01"),
  ],
  modalContent: {
    "2023-08-01": {
      date: new Date("2023-08-01").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendaftaran",
      description: "Gelombang 1 pendaftaran dibuka",
    },
    "2023-08-15": {
      date: new Date("2023-08-15").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendafataran",
      description: "Gelombang 2 pendaftaran dibuka",
    },
    "2023-09-10": {
      date: new Date("2023-09-10").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Lomba Offline",
      description: "Lomba poster design offline",
    },
    "2023-09-22": {
      date: new Date("2023-09-22").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Seleksi",
      description: "Tahap seleksi dibuka",
    },
    "2023-09-28": {
      date: new Date("2023-09-28").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Seleksi",
      description: "Tahap seleksi ditutup",
    },
    "2023-10-01": {
      date: new Date("2023-10-01").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Awarding",
      description: "Pengumuman pemenang",
    },
  },
};

// start day & finish

export const startDate = new Date("2023-07-28");
export const endDate = new Date("2023-10-03");

export default timelineData;
