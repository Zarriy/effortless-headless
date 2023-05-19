import Header from "./header";


export default function Layout({children, header}){
return(
    <>
        <Header menu={header.items}/>
        {children}
    </>
)

}