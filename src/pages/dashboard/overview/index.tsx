import Card from '@/components/ui/card';
import MetaData from '@/components/ui/meta-data';
import { Film, useGetFilmsQuery } from '@/store/slices/api/films';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import { DataTable } from './data-table';
import Heading from '@/components/ui/heading';
import { Icon } from '@/components/icons';
import useErrorMessage from '@/hooks/useErrorMessage';
import { columns } from '../films/columns';

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
            {/* <div className="pb-10 grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-14"> */}
            <div className="pb-10 flex gap-7 pl-2 xl:gap-10 overflow-x-auto">
              <Card>
                <div className="h-full flex flex-col gap-7">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Films" className="font-bold text-black" />
                    <Icon.Film />
                  </div>
                  <div className="mt-auto flex flex-col">
                    <span className="font-bold">{films?.count}</span>
                    <span className="text-sm font-medium text-[#00992b]">
                      20 more than yesterday
                    </span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="h-full flex flex-col gap-7">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Starships" className="font-bold text-black" />
                    <Icon.Starships />
                  </div>
                  <div className="mt-auto flex flex-col">
                    <span className="font-bold">{films?.count}</span>
                    <span className="text-sm font-medium text-[#00992b]">
                      20 more than yesterday
                    </span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="h-full flex flex-col gap-7">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="People" className="font-bold text-black" />
                    <Icon.People />
                  </div>
                  <div className="mt-auto flex flex-col">
                    <span className="font-bold">{films?.count}</span>
                    <span className="text-sm font-medium text-[#00992b]">
                      20 more than yesterday
                    </span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="h-full flex flex-col gap-7">
                  <div className="flex gap-5 justify-between">
                    <Heading size="base" title="Species" className="font-bold text-black" />
                    <Icon.Species />
                  </div>
                  <div className="mt-auto flex flex-col">
                    <span className="font-bold">{films?.count}</span>
                    <span className="text-sm font-medium text-[#00992b]">
                      20 more than yesterday
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <Heading title="Films" />
            <DataTable columns={columns} data={films?.results as Film[]} />
          </div>
        )}
      </div>
    </>
  );
}
