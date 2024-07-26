type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

export default function Input({ label, placeholder, type = 'text' }: InputProps) {
  return (
    <div className="relative block">
      <label className="label-top text-[#B0B9C8]">{label}</label>
      <input
        type={type}
        name="message"
        placeholder={placeholder ? placeholder : ''}
        className="form-input border py-3 px-4 h-[48px] bg-white placeholder:text-sm w-full block focus:outline-primary rounded-lg"
      />
    </div>
  );
}
