export default function CardProduct({ item }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-red-200 w-80 text-[#1d1d1d] ">
      <img src={item.image} alt="sadsf" className="h-60 cursor-pointer" />
      <div className="pt-3 pl-3 h-14 ">
        <span className="cursor-pointer">{item.title}</span>
      </div>
    </div>
  );
}
