const GenerateErrorMessages = (errors) => {
  const skutd = document.createElement('td');
  const descriptiontd = document.createElement('td');
  const demographictd = document.createElement('td');
  const categorytd = document.createElement('td');
  const typetd = document.createElement('td');
  const releaseDatetd = document.createElement('td');
  const primaryColorCodetd = document.createElement('td');
  const secondaryColorCodetd = document.createElement('td');
  const globalProductCodetd = document.createElement('td');
  const activetd = document.createElement('td');
  const brandtd = document.createElement('td');
  const imageSrctd = document.createElement('td');
  const materialtd = document.createElement('td');
  const pricetd = document.createElement('td');
  const quantitytd = document.createElement('td');
  const nametd = document.createElement('td');

  if (errors.name !== undefined || errors.name != null) {
    nametd.textContent = `${errors.name}`;
  }
  if (errors.sku !== undefined || errors.sku != null) {
    skutd.textContent = `${errors.sku}`;
  }
  if (errors.description !== undefined || errors.description != null) {
    descriptiontd.textContent = `${errors.description}`;
  }
  if (errors.primaryColorCode !== undefined || errors.primaryColorCode != null) {
    primaryColorCodetd.textContent = `${errors.primaryColorCode}`;
  }
  if (
    errors.secondaryColorCode !== undefined
        || errors.secondaryColorCode != null
  ) {
    secondaryColorCodetd.textContent = `${errors.secondaryColorCode}`;
  }
  if (
    errors.globalProductCode !== undefined
        || errors.globalProductCode != null
  ) {
    globalProductCodetd.textContent = `${errors.globalProductCode}`;
  }
  if (errors.active !== undefined || errors.active != null) {
    activetd.textContent = `${errors.active}`;
  }
  if (errors.brand !== undefined || errors.brand != null) {
    brandtd.textContent = `${errors.brand}`;
  }
  if (errors.imageSrc !== undefined || errors.imageSrc != null) {
    imageSrctd.textContent = `${errors.imageSrc}`;
  }
  if (errors.material !== undefined || errors.material != null) {
    materialtd.textContent = `${errors.material}`;
  }
  if (errors.price !== undefined || errors.price != null) {
    pricetd.textContent = `${errors.price}`;
  }
  if (errors.quantity !== undefined || errors.quantity != null) {
    quantitytd.textContent = `${errors.quantity}`;
  }
  if (errors.demographic !== undefined || errors.demographic != null) {
    demographictd.textContent = `${errors.demographic}`;
  }
  if (errors.category !== undefined || errors.category != null) {
    categorytd.textContent = `${errors.category}`;
  }
  if (errors.type !== undefined || errors.type != null) {
    typetd.textContent = `${errors.type}`;
  }
  if (errors.releaseDate !== undefined || errors.releaseDate != null) {
    releaseDatetd.textContent = `${errors.releaseDate}`;
  }
};
export default GenerateErrorMessages;
