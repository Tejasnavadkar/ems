

export const Header = ({data}) =>{
    console.log('Header-data',data)

    return (
        <div className="flex justify-between px-6 pt-3 ">
            <div className="flex flex-col ">
                <span className="text-lg">Hello </span>
                <span className="text-3xl font-bold">{data?.name} 👋</span>
            </div>
            <div>
            <button className="bg-red-600 rounded-md px-4 py-2 ">Log Out</button>
            </div>
        </div>
    )
}