import { Categories } from "@/components/Categories";
import { Companions } from "@/components/Companions";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

interface RootPageProps{
    searchParams:{
        categoryId:string,
        name: string
    }
}

const RootPage= async ({searchParams}: RootPageProps)=>{
    const categories= await prismadb.category.findMany();

    const data= await prismadb.companion.findMany({
        where:{
            categoryId: searchParams.categoryId,
            name: {
                contains: searchParams.name,
                mode: 'insensitive'
            }
        },
        orderBy:{
            createdAt: 'desc'
        },
        include:{
            _count: {
                select:{
                    messages:true
                }
            }
        }
    });

    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput/>
            <Categories data={categories}/>
            <Companions data={data}/>
        </div>
    )
}
export default RootPage;