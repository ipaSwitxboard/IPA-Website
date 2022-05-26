import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {
  map : mapboxgl.Map | undefined;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapBoxKey;
    const map = new mapboxgl.Map({
      container: 'map-mapbox', // container ID
      renderWorldCopies: false,
      style: 'mapbox://styles/ipaholding/cl1ywweyv004g15o6p89j7q43', // style URL
      center: [0, 50], // starting position
      zoom: -0.5// starting zoom
    });

    map.on('load', () => {
      //list of partners
      map.addSource('partners', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Karuna EV Berlin</strong><p>VERY Close friends - Partners</p>',
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [13.3759918,52.5688214]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Academy 42</strong><p>Close Friends</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.7873579,52.4267558]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Joachim Rücker Consulting</strong><p>VERY Close friends - Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [8.2278132,50.6177891]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>UNIDO ITPO</strong><p>Friends</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [12.4641472,41.9010569]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>GESA gGmbH</strong><p>VERY Close friends – Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [7.1178495,51.2651479]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Moonpunks</strong><p>VERY Close friends - Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [14.2231936,48.23228]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Innovation4X</strong><p>VERY Close friends – Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [14.223208,48.2322682]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Waagner-Biro Bridge Systems</strong><p>Friends – Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [17.3656339,49.2129376]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Ars Electronica Linz Friends </strong><p>Partners</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [14.2821381,48.3097431]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Vertical Farming Institute Vienna</strong><p>RY Close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [16.3477474,48.2056321]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>EB Project Management</strong><p>VERY Close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [13.8387069,46.6119942]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Politas Consulting</strong><p>VERY Close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-118.3701882,34.046421]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>USC</strong><p> friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-118.2917798,34.0207016]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Alex McDowell- Experimental Design </strong><p> VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-118.4929878,34.0095767]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>NextFab Foundation</strong><p> VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-75.1948089,39.9397087]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Y-Center</strong><p> friends</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-75.1883459,39.9783143]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Odyssea</strong><p> VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [23.6690445,37.9586289]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>NAOMI</strong><p> VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [22.9377918,40.6390781]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Step Up Stop Slavery</strong><p>friends</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [33.3604295,35.1662815]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>DIMA - Project Habesha Mexico</strong><p>VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-99.2025762,19.345266]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>The Refugee Company</strong><p>VERY close friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [4.9354494,52.3362734]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>SPARK</strong><p>friends – Partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [4.8901795,52.3805699]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>KLABU</strong><p>friends</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [4.8843547,52.3831095]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Africa Clean Energy</strong><p>friends</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [4.9231328,52.3763847]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Bizgees</strong><p>friends - partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-1.2565555,51.7548164]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>SEI Social Entreprise International</strong><p>friends - partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-1.2771378,51.7491736]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>NOIVA Foundation</strong><p>friends - partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-0.1959875,44.6647476]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>EAHR – Emergency Architecture for Human Rights</strong><p>VERY close friends - partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [12.5583117,55.6915294]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Green Paradise</strong><p>friends - partners</p>',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [13.5901603,32.7416863]
              }
            }
          ]
        }
      });
      //list of projects
      map.addSource('projects', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Masters Course for Social Work</strong><p>Cooperation with German Academic Exchange Services (DAAD) and German\n' +
                  'Techgnical Universities - Development of a Masters Course for Social Work with\n' +
                  'Refugees at the German Jordanian University (GJU) Amman/Jordan</p>',
                'route': '/tunisia/projects;country=Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [35.8002692,31.7766562]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Partnership agreement</strong><p>Development of a partnership agreement between the State of Baden Württemberg and the Region of Dohuk- Kurdish Region of Iraq</p>',
                'route': '/Austria/projects;country=Austria'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [42.9923624,36.8624672]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Sales Representation</strong><p>Sales Representation Zeppelin Mobile Systems – Germany for Mobile Prefabricated hospitals</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [12.3522313,47.85943]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Africa - from Crisis to Opportunity</strong><p>Study and Action plan “Africa - from Crisis to Opportunity “ Office of the Prime Minister Austria. Advisory services to the Chancellor of Austria Christian Kern</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [14.1527854,48.0202207]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Stabilisation of Libya through economic development</strong><p>Preparatory Study “Stabilisation of Libya through economic development” (Private Sector Client)</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [13.1950374,32.8672468]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>European Return and Reintegration Network (ERRIN)</strong><p>Planning and Implementation for returns to Algeria and Egypt</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [31.223445,30.0594838]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Responsibility to Protect</strong><p>Study for German Ministry of Interior (BAMF) on spontaneous voluntary return to Syria; “Responsibility to Protect”</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [38.089639,34.944676]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Steel Bridges</strong><p>Sales Representation for Waagner-Biro Emergency Steel Bridges</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [16.3656339,48.2129376]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Sustainable Development Zone Project Ethiopia</strong><p>Development of two Small and Medium Enterprise Cities in Oromia/Amhara in Ethiopia</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [39.968805,10.742166]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Harraga</strong><p>“Harraga” Assistance and Counselling to Migrants and Tunisians involved or attracted by irregular pathways</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.1800146,36.7950525]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Swiss migration office</strong><p>Advisory Services on Refugee Reception to Swiss Migration Office</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [9.3312193,47.4511291]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Study for International Peace Institute </strong><p>New York  - Impact of Syria Crisis on Health Services in the Middle East</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [4.3777312,50.8423226]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Swiss migration office</strong><p>Advisory Services on Refugee Reception to Swiss Migration Office</p>',
                'route': '/Austria/projects;country=Austria'

              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-80.9714857,30.7501208]
              }
            }
          ]
        }
      });
      //list of offices
      map.addSource('offices', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>New York City Office</strong>',
                'route': '/USA'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-73.9596163, 40.7458676]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>HQ Tunis Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.3198846,36.883623]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Tunis Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.1824729,36.824395]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Sousse Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.6068297,35.8548316]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Mahdia Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [11.0329048,35.5265383]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Sfax Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.7574054,34.7343341]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Zarzis Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [11.0860141,33.5041224]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Tatouine Office</strong>',
                'route': '/tunisia/family;member=IPA Switxboard Tunisia'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [10.2866901,32.8566396]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '<strong>Vienna Office</strong>',
                'route': '/Austria/family;member=IPA Switxboard Vienna',
                'marker-color': '#740b0b'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [16.3435368,48.1997224]
              }
            }
          ]
        }
      });
      //adding sources to map
      map.addLayer({
        'id': 'partners',
        'type': 'circle',
        'source': 'partners',
        'paint': {
          'circle-color': 'orange',
          'circle-radius': 6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });
      map.addLayer({
        'id': 'projects',
        'type': 'circle',
        'source': 'projects',
        'paint': {
          'circle-color': 'darkcyan',
          'circle-radius': 6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });
      map.addLayer({
        'id': 'offices',
        'type': 'circle',
        'source': 'offices',
        'paint': {
          'circle-color': '#740b0b',
          'circle-radius': 6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });
      //adding popups to sources with no closing button
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
      //show popup on hover
      map.on('mouseenter', ['projects', 'offices', 'partners'], (e) => {

        map.getCanvas().style.cursor = 'pointer';

        // @ts-ignore
        const coordinates = e.features[0].geometry.coordinates.slice();
        // @ts-ignore
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });
      map.on('mouseleave', ['projects', 'offices', 'partners'], () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
      //go to page
      map.on('click', ['projects', 'offices', 'partners'], (e) => {
        // @ts-ignore
        this.router.navigateByUrl(e.features[0].properties.route);
      } );
    });

  }

}
