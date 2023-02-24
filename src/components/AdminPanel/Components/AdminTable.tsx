import { fetchProducts } from '@/utils/actions/product'
import { useQuery } from 'react-query'
import products_list from 'src/components/Product/products_data.json'

import { Actions } from './AdminTableComponents/Actions'
import { Row } from './AdminTableComponents/Row'
import { Services } from './AdminTableComponents/Services'

export function AdminTable() {
  const columnTitles = ['Product', 'Description', 'Price', 'Total Views', 'Services', 'Action']
  const { isLoading, error, data } = useQuery('productData', () => fetchProducts())
  if (data) {
    return (
      <>
        <div className="w-full overflow-x-auto">
          <table
            className="w-full text-left border border-separate rounded border-slate-200"
            cellSpacing="0"
          >
            <tbody>
              <tr>
                {columnTitles.map((item) => (
                  <th
                    key={item}
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    {item}
                  </th>
                ))}
              </tr>
              {data.map((item, id) => (
                <Row {...item} key={id} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
  return (
    <>
      <p>Loading...</p>
    </>
  )
}
