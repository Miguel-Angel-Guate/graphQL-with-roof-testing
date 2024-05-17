let roofs = [
    { id: '1', type: 'Asphalt Shingle', material: ['Asphalt', 'Fiberglass'] },
    { id: '2', type: 'Metal Roof', material: ['Steel', 'Aluminum'] },
    { id: '3', type: 'Clay Tile', material: ['Clay'] },
    { id: '4', type: 'Slate Roof', material: ['Slate'] },
    { id: '5', type: 'Wood Shake', material: ['Cedar'] },
]

let contractors = [
    { id: '1', name: 'Top Roofing', verified: true },
    { id: '2', name: 'Quality Roofers', verified: false },
    { id: '3', name: 'Reliable Roofing Co.', verified: true },
]

let reviews = [
    { id: '1', rating: 9, content: 'Excellent service and quality.', contractor_id: '1', roof_id: '2' },
    { id: '2', rating: 10, content: 'Highly recommend for their professionalism.', contractor_id: '2', roof_id: '1' },
    { id: '3', rating: 7, content: 'Good value for money, but installation took longer than expected.', contractor_id: '3', roof_id: '3' },
    { id: '4', rating: 5, content: 'Mediocre experience. The materials used were not up to the mark.', contractor_id: '2', roof_id: '4' },
    { id: '5', rating: 8, content: 'Solid performance, but a bit pricey.', contractor_id: '2', roof_id: '5' },
    { id: '6', rating: 7, content: 'Decent work, but communication could be better.', contractor_id: '1', roof_id: '2' },
    { id: '7', rating: 10, content: 'Fantastic job! Very satisfied with the outcome.', contractor_id: '3', roof_id: '1' },
]

export default { roofs, contractors, reviews }
