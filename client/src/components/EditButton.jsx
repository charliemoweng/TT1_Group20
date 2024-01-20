const EditButton = (props) => {
  const handleEditItinerary = (data) => {
    console.log(props.id)
    console.log(data)
  }
  return (
    <button
      type="submit"
      class="text-white bg-red-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:scale-105 ease-in-out duration-500"
      onClick={handleEditItinerary}
    >
      Edit
    </button>
  )
}

export default EditButton
