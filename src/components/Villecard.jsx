export default function Villecard() {
  return (
    <div className="w-32 h-24 rounded-xl flex justify-center items-center relative cursor-pointer family">
      <img
        src="https://images.unsplash.com/photo-1608914981498-5b8431aa92b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
        className="h-full w-full object-cover rounded-xl"
      />
      <div className="w-full absolute bottom-0 text-xl text-white  flex justify-center items-center">
        <span>Parakou</span>
      </div>
    </div>
  );
}
