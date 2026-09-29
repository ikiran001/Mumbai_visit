import { images } from './images';

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#places', label: 'Places' },
  { href: '#resorts', label: 'Resorts' },
  { href: '#experience', label: 'My Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#tips', label: 'Tips' },
];

export const places = [
  { name: 'Gateway of India', tag: 'Iconic', image: images.gateway, description: "Built in 1924 overlooking the Arabian Sea, this triumphal arch welcomed King George V. Today it's Mumbai's most photographed monument — especially magical at sunrise when the ferries leave for Elephanta.", location: 'Apollo Bunder, Colaba' },
  { name: 'Marine Drive', tag: 'Sunset', image: images.marineDrive, description: "The Queen's Necklace — a 3.6 km curved boulevard along the coast. Locals gather here every evening. Sitting on the promenade with chai while the streetlights curve into the horizon is pure Mumbai therapy.", location: 'Netaji Subhash Chandra Bose Road' },
  { name: 'Taj Mahal Palace', tag: 'Heritage', image: images.gatewayTaj, description: "India's most legendary hotel since 1903, facing the Gateway. Its dome and red brick facade are symbols of luxury and resilience.", location: 'Colaba, South Mumbai' },
  { name: 'Bandra-Worli Sea Link', tag: 'Modern', image: images.seaLink, description: 'A cable-stayed bridge connecting Bandra to Worli across the bay. Driving across at night with the city lights reflecting on water feels futuristic.', location: 'Bandra — Worli' },
  { name: 'Elephanta Caves', tag: 'UNESCO', image: images.elephanta, description: 'Ancient rock-cut temples on Elephanta Island. The massive Trimurti sculpture of Shiva is breathtaking.', location: 'Elephanta Island (ferry from Gateway)' },
  { name: 'Juhu Beach', tag: 'Beach', image: images.juhuBeach, description: 'Where Bollywood stars jog and families fly kites on weekends. Try bhel puri from a beach vendor.', location: 'Juhu, Western Suburbs' },
  { name: 'Chhatrapati Shivaji Terminus', tag: 'Heritage', image: images.cstm, description: "A UNESCO World Heritage Site and one of the busiest railway stations on earth. Victorian Gothic architecture meets millions of daily commuters.", location: 'Fort, South Mumbai' },
  { name: 'Haji Ali Dargah', tag: 'Spiritual', image: images.hajiAli, description: 'A mosque and tomb on an islet connected by a causeway — accessible only at low tide.', location: 'Worli, off coast' },
];

export const featuredResort = {
  name: 'The Taj Mahal Palace, Mumbai',
  image: images.resortFeatured,
  description: 'The crown jewel of Indian hospitality. I had high tea at Sea Lounge with a view of the Gateway — scones, masala chai, and the sound of waves.',
  amenities: ['Sea-facing rooms', '9 restaurants & bars', 'Jiva Spa', 'Heritage tours'],
  area: 'Colaba · South Mumbai',
};

export const resorts = [
  { name: 'ITC Maratha', image: images.resortItc, description: 'Inspired by the Maratha dynasty — grand courtyards, lotus motifs, and one of the best Sunday brunches in the city.', area: 'Andheri East · Near Airport' },
  { name: 'JW Marriott Mumbai Juhu', image: images.resortMarriott, description: 'Steps from Juhu Beach with panoramic sea views from the pool deck. Woke up to sunrise over the Arabian Sea every morning.', area: 'Juhu · Beachfront' },
  { name: 'The St. Regis Mumbai', image: images.resortStRegis, description: "Ultra-luxury in Lower Parel with butler service. Mumbai's skyline from the 40th floor — simply unreal.", area: 'Lower Parel · Central Mumbai' },
  { name: 'The Resort Mumbai', image: images.resortMadh, description: 'A hidden oasis in Madh Island — lush gardens, private beach access, and a peaceful escape from city noise.', area: 'Madh Island · Off coast' },
];

export const timeline = [
  { day: 'Day 1', title: 'Colaba & the Gateway', text: 'Checked into a hotel near Colaba Causeway. First stop: Gateway of India. Evening walk along Marine Drive. The curve of lights earned its nickname instantly.' },
  { day: 'Day 2', title: 'Elephanta & Street Food', text: "Morning ferry to Elephanta Caves. Back by afternoon for vada pav near CST station (best I've ever had) and explored Crawford Market's chaos and colors." },
  { day: 'Day 3', title: 'Bandra & Bollywood Vibes', text: "Drove the Sea Link — goosebumps. Bandra's cafes, street art on Chapel Road, and spotting Shah Rukh Khan's Mannat from outside." },
  { day: 'Day 4–5', title: 'Juhu, Resorts & Relaxation', text: 'Moved to JW Marriott Juhu for two nights. Morning jogs on the beach, afternoon pool, evening seafood at Mahesh Lunch Home.' },
  { day: 'Day 6–7', title: 'Dharavi, Dhobi Ghat & Goodbye', text: "Last night: high tea at Taj Palace, tears at departure. Mumbai wasn't a trip — it was a feeling." },
];

export const gallery = [
  { src: images.gateway, label: 'Gateway of India', className: 'wide' },
  { src: images.marineDrive, label: 'Marine Drive' },
  { src: images.gatewayTaj, label: 'Taj Palace', className: 'tall' },
  { src: images.juhuBeach, label: 'Juhu Beach' },
  { src: images.seaLink, label: 'Sea Link' },
  { src: images.cstm, label: 'CSMT Station', className: 'wide' },
  { src: images.elephanta, label: 'Elephanta' },
  { src: images.resortFeatured, label: 'Resort Life' },
];

export const foodItems = [
  { name: 'Vada Pav', desc: "Mumbai's burger. Crispy potato fritter in a soft bun with chutney." },
  { name: 'Pav Bhaji', desc: 'Spiced vegetable mash with buttered bread rolls.' },
  { name: 'Bhel Puri', desc: 'Tangy, crunchy chaat by the beach.' },
  { name: 'Keema Pav', desc: 'Minced meat curry with bread, best after midnight.' },
  { name: 'Filter Coffee', desc: 'South Indian style, strong and frothy.' },
];

export const tips = [
  { icon: '🚇', title: 'Use Local Trains Wisely', text: 'Western and Central lines connect the city. Avoid peak hours (8–10 AM, 6–8 PM).' },
  { icon: '💧', title: 'Stay Hydrated', text: 'Mumbai is humid year-round. Carry a water bottle. Coconut water from street vendors is a lifesaver.' },
  { icon: '📱', title: 'Download Apps', text: 'Use Uber/Ola for cabs, Google Maps for local trains, and Zomato for restaurant discovery.' },
  { icon: '🌧️', title: 'Monsoon Magic', text: "June–September brings heavy rain. Carry an umbrella and see Marine Drive in the rain — it's cinematic." },
  { icon: '🛡️', title: 'Stay Aware', text: 'Mumbai is generally safe, but keep valuables secure in crowded areas like stations and markets.' },
  { icon: '🌅', title: 'Best Time', text: 'November to February offers pleasant weather — ideal for walking tours and beach visits.' },
];

export { images };
