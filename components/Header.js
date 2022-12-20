import Image from "next/image"
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';    


const Header = () => {
  return (
      <header className="flex flex-col items-center justify-between h-auto m-5 sm:m-0 sm:flex-row">
          <div className="flex flex-grow max-w-2xl justify-evenly">
              <HeaderItem title="HOME" Icon={HomeIcon}/>
              <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
              <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
              <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
              <HeaderItem title="SEARCH" Icon={SearchIcon} />
              <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
          </div>
          <div>
             <Image className="object-contain" width={200} height={100} alt="logo" src="https://links.papareact.com/ua6"/>
          </div>
            
      </header>
  )
}

export default Header