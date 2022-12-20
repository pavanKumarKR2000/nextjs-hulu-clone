
const HeaderItem = ({Icon,title}) => {
  return (
      <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white">
          <Icon className="h-6 mb-1 group-hover:animate-bounce"/>
          <p className="text-sm tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
      </div>
  )
}

export default HeaderItem