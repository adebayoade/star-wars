type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  register: object;
};

export default function Input({ label, placeholder, type = 'text', register }: InputProps) {
  return (
    <div className="relative block">
      <label className="label-top text-[#B0B9C8]">{label}</label>
      <input
        {...register}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        className="form-input border py-3 px-4 h-[48px] bg-white placeholder-gray-400 w-full block focus:outline-primary rounded-md"
      />
    </div>
  );
}
