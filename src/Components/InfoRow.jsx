function InfoRow({ icon, heading, text, arrow }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {heading}
          </h4>
          <p className="text-sm text-gray-500">
            {text}
          </p>
        </div>
      </div>

      <img src={arrow} alt="" className="h-10 w-10 bg-[#f7f7f7] rounded-full" />
    </div>
  );
}

export default InfoRow;
