import Header from "./header";


export default function Layout({children, menu}){
return(
    <>
        <Header menu={menu}/>
        {children}
    </>
)

}