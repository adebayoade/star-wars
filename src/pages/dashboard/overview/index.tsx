import Card from '@/components/ui/card';
import MetaData from '@/components/ui/meta-data';
import { Film, useGetFilmsQuery } from '@/store/slices/api/films';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import { DataTable } from './data-table';
import Heading from '@/components/ui/heading';
import { Icon } from '@/components/icons';
import useErrorMessage from '@/hooks/useErrorMessage';
// import { DataTable } from '@/components/data-table';

export default function Overview() {
  const { data: films, isLoading, error } = useGetFilmsQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <MetaData title="Overview" />
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <div className="flex flex-col gap-10">
            {/* <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-14"> */}
            <div className="pb-10 flex gap-10 xl:gap-16 overflow-x-auto">
              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Films" className="font-bold text-black" />
                    <Icon.Film />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Starship" className="font-bold text-black" />
                    <Icon.Starships />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="People" className="font-bold text-black" />
                    <Icon.People />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Species" className="font-bold text-black" />
                    <Icon.Species />
                  </div>
                  <span className="font-bold text-xl">{films?.count}</span>
                  <span className="text-sm text-[#00992b]">20 more than yesterday</span>
                </div>
              </Card>
            </div>
            <Heading title="Films" />
            <DataTable columns={columns} data={films?.results as Film[]}  />
          </div>
        )}
      </div>
    </>
  );
}
