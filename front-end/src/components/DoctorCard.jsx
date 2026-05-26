import { useNavigate } from "react-router-dom";

const doctorImages = [
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800",
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800",
  "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800",
  "https://images.unsplash.com/photo-1594824475544-3d5c8d52c9e0?q=80&w=800",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800",
  "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
  "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=800",
  "https://images.unsplash.com/photo-1580281657527-47b95d4b9d9a?q=80&w=800",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800",
  "https://images.unsplash.com/photo-1604881987925-1b0b7c9d9dba?q=80&w=800",
  "https://images.unsplash.com/photo-1576765608866-5b51046452be?q=80&w=800",
  "https://images.unsplash.com/photo-1580281780460-82d2776dcb7c?q=80&w=800",
  "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=800",
  "https://images.unsplash.com/photo-1587502537104-8a6b1b3f74c3?q=80&w=800",
  "https://images.unsplash.com/photo-1594824475467-7f6c7c2d0b3c?q=80&w=800",
  "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800",
  "https://images.unsplash.com/photo-1600959907732-5b2d1b4a1af9?q=80&w=800",
  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800",
  "https://images.unsplash.com/photo-1582719478185-2196a7a3e0b2?q=80&w=800",
  "https://images.unsplash.com/photo-1606206966736-cb97a33b3b9d?q=80&w=800",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800"
];

export default function DoctorCard({ doc, index }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition">
      
      <img
        src={doctorImages[index % doctorImages.length]}
        alt="doctor"
        className="w-full h-40 object-cover rounded-xl"
      />

      <h2 className="text-lg font-bold mt-3">{doc.name}</h2>
      <p className="text-gray-500">{doc.spec}</p>

      <div className="flex justify-between mt-2 text-sm">
        <span className="text-yellow-500">⭐ {doc.rating}</span>
        <span className="text-gray-400">📍 {doc.location}</span>
      </div>

      <button
        onClick={() =>
          navigate("/booking", { state: { doctor: doc } })
        }
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Book Now
      </button>
    </div>
  );
}