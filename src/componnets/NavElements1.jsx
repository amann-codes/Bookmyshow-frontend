import { Link } from "react-router-dom";
export function NavElement1(prop) {
  return (
    <div className="cursor-pointer pe-5">
      <Link className=" text-sm font-normal" to={prop.to}>
        {prop.title}
      </Link>
    </div>
  );
}
