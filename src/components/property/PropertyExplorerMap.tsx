"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


interface Property {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  price?: number;
}


interface Props {
  properties: Property[];
}


export default function PropertyExplorerMap({
  properties,
}: Props) {


  return (

    <div className="h-[500px] overflow-hidden rounded-3xl shadow-lg">


      <MapContainer

        center={[-6.2,106.8]}

        zoom={11}

        className="h-full w-full"

      >


        <TileLayer

          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

          attribution="© OpenStreetMap"

        />



        {
          properties.map((item)=>(

            <Marker

              key={item.id}

              position={[
                item.latitude,
                item.longitude
              ]}

            >

              <Popup>

                <div className="space-y-2">

                  <h3 className="font-bold">
                    {item.title}
                  </h3>


                  {
                    item.price && (

                      <p>
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>

                    )
                  }


                  <a

                    href={`/properties/${item.id}`}

                    className="text-cyan-600 font-semibold"

                  >
                    Lihat Detail
                  </a>


                </div>


              </Popup>


            </Marker>

          ))
        }


      </MapContainer>


    </div>

  );

}
