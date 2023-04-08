export const NavLinkStyles = ({isActive}: {isActive:boolean}):string => {
  const defaultS = "h-[10%] w-11/12 flex items-center gap-2 rounded-lg text-slate-100 text-xl py-4 pl-2 transition-colors duration-300 ease-linear hover:bg-slate-400";
  const styles = isActive ? "bg-slate-400 "+defaultS : defaultS;
  return styles;
}