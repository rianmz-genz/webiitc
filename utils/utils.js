// joining class tailwind
export function cn(...cns) {
  return cns.join(" ");
}

// Variant builder
export function variant(base, variants) {
  return function builder(variantValues) {
    const variantEntries = Object.entries(variantValues);
    let variantClasses = [];
    variantEntries.forEach(([name, value]) => {
      variantClasses.push(variants[name][value]);
    });
    // console.log(...variantClasses, base)
    return cn(base, ...variantClasses);
  };
}

export function getBinaryByBoolean({ boolean }) {
  if (boolean) {
    return 1;
  } else return 0;
}

export default function getPlusDate({ plusDate }) {
  const today = new Date(); // Mengambil tanggal saat ini
  const threeDaysFromNow = new Date(today.setDate(today.getDate() + plusDate)); // Menambahkan 3 hari ke tanggal saat ini

  const formattedDate = formatDate(threeDaysFromNow); // Format tanggal

  return formattedDate;
}

// Fungsi untuk memformat tanggal ke dalam format yang diinginkan
function formatDate(date) {
  console.log(date);
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
