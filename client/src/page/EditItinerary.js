import { useParams } from 'react-router-dom'
import { useState } from 'react';
import ItineraryForm from '../components/Itinerary/ItineraryForm'

const ItineraryEdit = () => {
    const handleEdit = () => {
        console.log('edit')
    }

    return (
        <ItineraryForm action='edit'/>
    )
}

export default ItineraryEdit