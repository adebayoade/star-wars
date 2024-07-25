import Card from '@/components/ui/card';
import MetaData from '@/components/ui/meta-data';
import { useGetFilmsQuery } from '@/store/slices/api/films';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import { DataTable } from './data-table';
import Heading from '@/components/ui/heading';
import { Icon } from '@/components/icons';

export default function Overview() {
  const { data: films, isLoading, error } = useGetFilmsQuery();

  let errMsg = '';
  if (error) {
    // 2) Checking if error is FetchBaseQueryError based on
    // discriminated property 'status':
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
      // 3) We're left with the 3rd case, SerializedError:
    } else {
      // you can access all properties of `SerializedError` here
      errMsg = 'An error occurred';
    }
  }
  
  return (
    <>
      <MetaData title="Overview" />
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <div className="mt-12 h-full flex flex-col gap-10">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="md" title="Films" className="font-bold text-black" />
                    <Icon.Film />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="md" title="Starship" className="font-bold text-black" />
                    <Icon.Starships />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="md" title="People" className="font-bold text-black" />
                    <Icon.People />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="md" title="Species" className="font-bold text-black" />
                    <Icon.Species />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>
            </div>
            <Heading title="Films" />
            <DataTable columns={columns} data={films?.results} />
          </div>
        )}
      </div>
    </>
  );
}
