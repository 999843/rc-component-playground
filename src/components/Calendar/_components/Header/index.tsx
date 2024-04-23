import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const arrowClass = `text-gray cursor-pointer text-sm hover:text-gray-300`

  return (
    <div className="flex items-start">
      <div className="flex items-center">
        <LeftOutlined className={`${arrowClass} pr-3`} />
        <span className="font-semibold mx-10 text-xl">2014年12月12日</span>
        <RightOutlined className={`${arrowClass} px-3`} />
        <button className="text-sm bg-gray-100 rounded px-2 py-1 hover:bg-[#ccc] hover:text-white">
          今天
        </button>
      </div>
    </div>
  )
}
export default Header
