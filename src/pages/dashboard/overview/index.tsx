import Card from '@/components/ui/card';
import MetaData from '@/components/ui/meta-data';
import { Film, useGetFilmsQuery } from '@/store/slices/api/films';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
// import { DataTable } from './data-table';
import Heading from '@/components/ui/heading';
import { Icon } from '@/components/icons';
import useErrorMessage from '@/hooks/useErrorMessage';
import { columns } from '../films/columns';
import { DataTable } from '@/components/data-table';

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
          <div aria-label="films" className="flex flex-col gap-10">
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

            {/* <table className="w-full caption-bottom text-base">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="mixed"
                      data-state="indeterminate"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select all"
                    >
                      <span
                        data-state="indeterminate"
                        className="flex items-center justify-center text-current"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-check h-4 w-4"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </button>
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Film Title
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Release Date
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Director
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Producer
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Episode ID
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Character
                  </th>
                  <th className="h-[74px] px-6 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 text-[#A4A7B7]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0 font-medium">
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="false"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    ></button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">A New Hope</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">1977-05-25</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    George Lucas
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Gary Kurtz, Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/1/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="false"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    ></button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    The Empire Strikes Back
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">1980-05-17</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Irvin Kershner
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Gary Kurtz, Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">5</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/1/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="false"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    ></button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Return of the Jedi
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">1983-05-25</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Richard Marquand
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Howard G. Kazanjian, George Lucas, Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">6</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/1/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="false"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    ></button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    The Phantom Menace
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">1999-05-19</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    George Lucas
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/2/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="selected"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="true"
                      data-state="checked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    >
                      <span
                        data-state="checked"
                        className="flex items-center justify-center text-current"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-check h-4 w-4"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Attack of the Clones
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">2002-05-16</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    George Lucas
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/2/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state="false"
                >
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      aria-label="Select row"
                    ></button>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Revenge of the Sith
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">2005-05-19</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    George Lucas
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Rick McCallum
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <span>https://swapi.dev/api/people/1/</span>
                  </td>
                  <td className="p-6 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <a href="/dashboard/films/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        )}
      </div>
    </>
  );
}
