const timelineData = {
  importantDates: [
    // date hari penting
    new Date('2023-07-10'),
    new Date('2023-07-20'),
    new Date('2023-07-30'),
  ],
  modalContent: {
    '2023-07-10': {
      date: new Date('2023-07-10').toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      title: 'Pendaftaran',
      description: 'Mulai pendaftaran untuk lomba',
    },
    '2023-07-20': {
      date: new Date('2023-07-20').toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      title: 'Penilaian',
      description: 'Proses penilaian karya peserta',
    },
    '2023-07-30': {
      date: new Date('2023-07-30').toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      title: 'Pengumuman',
      description: 'Pengumuman pemenang lomba',
    },
  },
};

// start day & finish
export const startDate = new Date('2023-07-01');
export const endDate = new Date('2023-08-01');

export default timelineData;
