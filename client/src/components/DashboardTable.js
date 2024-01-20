import ITINERARY from '../test/itinerary'
import EditButton from './EditButton'

const DashboardTable = (props) => {
  return (
    <div class="relative overflow-x-auto mx-8 my-8 rounded-md">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Itinerary title
            </th>
            <th scope="col" class="px-6 py-3">
              Budget
            </th>
            <th scope="col" class="px-6 py-3">
              Country
            </th>
            <th scope="col" class="px-6 py-3">
              List of destinations
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {ITINERARY.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.title}
              </th>
              <td class="px-6 py-4">{item.budget}</td>
              <td class="px-6 py-4">{item.country}</td>
              <td class="px-6 py-4">
                {item.destinations.map((destination, index) => (
                  <div key={index}>{destination}</div>
                ))}
              </td>
              <td>
                <EditButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardTable
