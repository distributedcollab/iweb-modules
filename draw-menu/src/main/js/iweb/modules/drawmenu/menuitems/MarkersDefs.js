/*
 * Copyright (c) 2008-2016, Massachusetts Institute of Technology (MIT)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define(["iweb/CoreModule"], function(Core) { //Add shape options

	return {  
	    'ICS':[  
	           {  
	               label:Core.Translate.i18nJSON('Fire Origin'),
	               img:'images/drawmenu/markers/fire_origin2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Incident Command Post'),
	               img:'images/drawmenu/markers/icp.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Incident Base'),
	               img:'images/drawmenu/markers/incident_base2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Camp'),
	               img:'images/drawmenu/markers/camp.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Staging Area'),
	               img:'images/drawmenu/markers/staging_area2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Water Source'),
	               img:'images/drawmenu/markers/water_source2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Division Break'),
	               img:'images/drawmenu/markers/division_break2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Branch Break'),
	               img:'images/drawmenu/markers/branch_break2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Zone Break'),
	               img:'images/drawmenu/markers/zone-break.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Hot Spot'),
	               img:'images/drawmenu/markers/hot_spot2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Drop Point'),
	               img:'images/drawmenu/markers/dry_point2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Spot Fire'),
	               img:'images/drawmenu/markers/heat_source2.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('MediVac Site'),
	               img:'images/drawmenu/markers/medivac.png'
	           },
	           {  
	               label:Core.Translate.i18nJSON('Helibase'),
	               img:'images/drawmenu/markers/helibase2.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Helispot'),
	               img:'images/drawmenu/markers/helispot.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Life Hazard'),
	               img:'images/drawmenu/markers/life-hazard.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Safety Zone'),
	               img:'images/drawmenu/markers/safety-zone.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Aerial Hazard'),
	               img:'images/drawmenu/markers/aerial-hazard.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Repeater, Mobile Relay'),
	               img:'images/drawmenu/markers/repeater_mobile_relay2.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('IR Downlink'),
	               img:'images/drawmenu/markers/ir-downlink.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Wind Direction'),
	               img:'images/drawmenu/markers/wind.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Aerial Ignition'),
	               img:'images/drawmenu/markers/aerial_ignition.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Station'),
	               img:'images/drawmenu/markers/F-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('First Aid Station'),
	               img:'images/drawmenu/markers/first_aid.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Lookout'),
	               img:'images/drawmenu/markers/flag-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Segment Break'),
	               img:'images/drawmenu/markers/segment-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Telephone'),
	               img:'images/drawmenu/markers/T-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Mobile Weather Unit'),
	               img:'images/drawmenu/markers/X-01.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/0.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/1.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/2.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/3.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/4.png'
	           },
	           {  
	              label:'',
	               img:'images/drawmenu/markers/5.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/6.png'
	           },
	           {  
	              label:'',
	               img:'images/drawmenu/markers/7.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/8.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/9.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/a.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/b.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/c.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/d.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/e.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/f.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/g.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/h.png'
	           },
	           {  
	              label:'',
	               img:'images/drawmenu/markers/i.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/j.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/k.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/l.png'
	           },
	           {  
	              label:'',
	               img:'images/drawmenu/markers/m.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/n.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/o.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/p.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/q.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/r.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/s.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/t.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/u.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/v.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/w.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/x.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/y.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/z.png'
	           },
	           {  
	              label: '',
	               img:'images/drawmenu/markers/small_x.png'
	           },
	           {  
	              label: Ext.String.format("{0}<br/>{1}", Core.Translate.i18nJSON('NWCG  - Defensible - Standalone'),
	              		Core.Translate.i18nJSON('CA-FIRESCOPE - Not Threatened')),
	               img:'images/drawmenu/markers/defensible_standalone_map.png'
	           },
	           {  
	              label: Ext.String.format("{0}<br/>{1}", Core.Translate.i18nJSON('NWCG - Defensible - Prep and Hold'),
	              		Core.Translate.i18nJSON('CA-FIRESCOPE - Threated Defensible')),
	               img:'images/drawmenu/markers/defensible_prep_and_hold_map.png'
	           },
	           {  
	              label: Ext.String.format("{0}<br/>{1}", Core.Translate.i18nJSON('NWCG - Non-Defensible - Prep and Leave'),
	              		Core.Translate.i18nJSON('CA-FIRESCOPE - Not Applicable')),
	               img:'images/drawmenu/markers/non-defensible_prep_and_leave_map.png'
	           },
	           {  
	              label: Ext.String.format("{0}<br/>{1}", Core.Translate.i18nJSON('NWCG - Non-Defensible - Rescue Drive-By'),
	              		Core.Translate.i18nJSON('CA-FIRESCOPE - Threated Non-Defensible')),
	               img:'images/drawmenu/markers/non-defensible_rescue_drive-by_map.png'
	           }
	       ],
	       "Incident":[  
	           {  
	              label: Core.Translate.i18nJSON('Civil Disturbance'),
	               img:'images/drawmenu/markers/Civil_Disturbance_Theme_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Criminal Activity Incident'),
	               img:'images/drawmenu/markers/Criminal_Activity_Theme_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Bomb Threat'),
	               img:'images/drawmenu/markers/Crime_Bomb_Threat_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Shooting'),
	               img:'images/drawmenu/markers/Crime_Shooting.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Incident'),
	               img:'images/drawmenu/markers/Fire_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Hazardous Material Incident'),
	               img:'images/drawmenu/markers/Hazmat_Hazardous_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Air Incident'),
	               img:'images/drawmenu/markers/Transport_Air_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Marine Incident'),
	               img:'images/drawmenu/markers/Transport_Marine_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Rail Incident'),
	               img:'images/drawmenu/markers/Transport_Rail_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Vehicle Incident'),
	               img:'images/drawmenu/markers/Transport_Vehicle_Theme.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('After Shock'),
	               img:'images/drawmenu/markers/Geo_After_Shock.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Earth Quake Epicenter'),
	               img:'images/drawmenu/markers/Geo_Earth_Quake_Epicenter.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Landslide'),
	               img:'images/drawmenu/markers/Geo_Landslide.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Subsidence'),
	               img:'images/drawmenu/markers/Geo_Subsidence.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Flood'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Flood.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fog'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Fog.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Hail'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Hail.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Rain'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Rain.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Snow'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Snow.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Thunderstorm'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Thunder_Storm.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Tornado'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Tornado_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Tropical Cyclone'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Tropical_Cyclone.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Tsunami'),
	               img:'images/drawmenu/markers/Hydro_Meteor_Tsunami_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Military Soldier'),
	               img:'images/drawmenu/markers/mil_soldier.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Military Vehicle'),
	               img:'images/drawmenu/markers/mil_vehicle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency medical Operation'),
	               img:'images/drawmenu/markers/E_Med_Emergency_Medical_Theme_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('EMT Station Location'),
	               img:'images/drawmenu/markers/E_Med_EMT_Station_Locations_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Ambulance'),
	               img:'images/drawmenu/markers/E_Med_Ambulance_S1_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Medical Evacuation Helicopter Station'),
	               img:'images/drawmenu/markers/E_Med_Evacuation_Helicopter_Station_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Health Department Facility'),
	               img:'images/drawmenu/markers/E_Med_Health_Department_Facility_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Hospital'),
	               img:'images/drawmenu/markers/E_Med_Hospital_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Hospital Ship'),
	               img:'images/drawmenu/markers/E_Med_Hospital_Ship_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Medical facilities Out Patient'),
	               img:'images/drawmenu/markers/E_Med_Medical_Facilities_Out_Patient_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Morgue'),
	               img:'images/drawmenu/markers/E_Med_Morgue_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Pharmacies'),
	               img:'images/drawmenu/markers/E_Med_Pharmacies_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Triage'),
	               img:'images/drawmenu/markers/E_Med_Triage_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Operation'),
	               img:'images/drawmenu/markers/Emergency_Operations_Theme_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Collection Evacuation Point'),
	               img:'images/drawmenu/markers/Emergency_Collection_Evacuation_Point_S1_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Incident Command Center'),
	               img:'images/drawmenu/markers/Emergency_Incident_Command_Center_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Operations Center'),
	               img:'images/drawmenu/markers/Emergency_Operations_Center_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Public Information Center'),
	               img:'images/drawmenu/markers/Emergency_Public_Information_Center_S1_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Shelters'),
	               img:'images/drawmenu/markers/Emergency_Shelters_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Staging Area'),
	               img:'images/drawmenu/markers/Emergency_Staging_Areas_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency teams'),
	               img:'images/drawmenu/markers/Emergency_Teams_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Water Distribution Center'),
	               img:'images/drawmenu/markers/Emergency_Water_Distribution_Center_S1_ch.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Emergency Food Distribution Center'),
	               img:'images/drawmenu/markers/Emgergency_Food_Distribution_Centers_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Suppression Operation'),
	               img:'images/drawmenu/markers/Fire_Suppression_Theme_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Hydrant'),
	               img:'images/drawmenu/markers/Fire_Hydrant_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Other Water Supply Location'),
	               img:'images/drawmenu/markers/Fire_Other_Water_Supply_Location_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Station'),
	               img:'images/drawmenu/markers/Fire_Station_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Law Enforcement Operation'),
	               img:'images/drawmenu/markers/Law_Enforcement_Theme_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('ATF'),
	               img:'images/drawmenu/markers/Law_ATF_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Border Patrol'),
	               img:'images/drawmenu/markers/Law_Border_Patrol_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Customs Service'),
	               img:'images/drawmenu/markers/Law_Customs_Service_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('DEA'),
	               img:'images/drawmenu/markers/Law_DEA_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('DOJ'),
	               img:'images/drawmenu/markers/Law_DOJ_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('FBI'),
	               img:'images/drawmenu/markers/Law_FBI_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Police'),
	               img:'images/drawmenu/markers/Law_Police_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Prison'),
	               img:'images/drawmenu/markers/Law_Prison_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Secret Service'),
	               img:'images/drawmenu/markers/Law_Secret_Service_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('TSA'),
	               img:'images/drawmenu/markers/Law_TSA_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('US Coast Guard'),
	               img:'images/drawmenu/markers/Law_US_Coast_Guard_S1.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('US Marshals Service'),
	               img:'images/drawmenu/markers/Law_US_Marshall_S1.png'
	           }
	       ],
	       'CST':[  
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Incident.png',
	              label: Core.Translate.i18nJSON('Incident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S1.png',
	              label: Core.Translate.i18nJSON('Infrastructure S1')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S2.png',
	              label: Core.Translate.i18nJSON('Infrastructure S2')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S3.png',
	              label: Core.Translate.i18nJSON('Infrastructure S3')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S4.png',
	              label: Core.Translate.i18nJSON('Infrastructure S4')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Natural_Event.png',
	              label: Core.Translate.i18nJSON('Natural Event')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S1.png',
	              label: Core.Translate.i18nJSON('Operation S1')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S2.png',
	              label: Core.Translate.i18nJSON('Operation S2')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S3.png',
	              label: Core.Translate.i18nJSON('Operation S3')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S4.png',
	              label: Core.Translate.i18nJSON('Operation S4')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Blank_Incident_A.png',
	              label: Core.Translate.i18nJSON('Blank incident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Blank_Incident_B.png',
	              label: Core.Translate.i18nJSON('Blank incident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Civil_Demonstrations_ch.png',
	              label: Core.Translate.i18nJSON('Civil Demonstrations')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Civil_Displaced_Population_ch.png',
	              label: Core.Translate.i18nJSON('Civil Displaced Population')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Civil_Disturbance_Theme_ch.png',
	              label: Core.Translate.i18nJSON('Civil Disturbance')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Civil_Rioting_ch.png',
	              label: Core.Translate.i18nJSON('Civil Rioting')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_ch.png',
	              label: Core.Translate.i18nJSON('Bomb')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_Explosion_ch.png',
	              label: Core.Translate.i18nJSON('Bomb Explosion')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_Threat_ch.png',
	              label: Core.Translate.i18nJSON('Bomb Threat')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Looting.png',
	              label: Core.Translate.i18nJSON('Looting')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Poisoning.png',
	              label: Core.Translate.i18nJSON('Poisoning')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Crime_Shooting.png',
	              label: Core.Translate.i18nJSON('Shooting crime')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Criminal_Activity_Theme_ch.png',
	              label: Core.Translate.i18nJSON('Criminal Activity')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Hotspot.png',
	              label: Core.Translate.i18nJSON('Fire Hotspot')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Non_Residential_ch.png',
	              label: Core.Translate.i18nJSON('Non Residential Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Origin_ch.png',
	              label: Core.Translate.i18nJSON('Fire Origin')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Residential_ch.png',
	              label: Core.Translate.i18nJSON('Residential Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_School_ch.png',
	              label: Core.Translate.i18nJSON('School Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Smoke_ch.png',
	              label: Core.Translate.i18nJSON('Smoke')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Special_Needs.png',
	              label: Core.Translate.i18nJSON('Special Needs Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Theme.png',
	              label: Core.Translate.i18nJSON('Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Fire_Wild_ch.png',
	              label: Core.Translate.i18nJSON('Wild Fire')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Chemical_Agents.png',
	              label: Core.Translate.i18nJSON('Chemical Agents')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Corrosive_Material.png',
	              label: Core.Translate.i18nJSON('Corrosive Material')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Dangerous_When_Wet.png',
	              label: Core.Translate.i18nJSON('Dangerous When Wet')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Explosive.png',
	              label: Core.Translate.i18nJSON('Explosive')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Gas.png',
	              label: Core.Translate.i18nJSON('Flammable Gas')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Liquid.png',
	              label: Core.Translate.i18nJSON('Flammable Liquid')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Solid.png',
	              label: Core.Translate.i18nJSON('Flammable Solid')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Hazardous_Theme.png',
	              label: Core.Translate.i18nJSON('Hazardous')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Non-Flammable_Gas.png',
	              label: Core.Translate.i18nJSON('Non-Flammable Gas')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Organic_Peroxides.png',
	              label: Core.Translate.i18nJSON('Organic Peroxies')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Radioactive_Material_ch.png',
	              label: Core.Translate.i18nJSON('Radioactive Maerial')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Spontaneously_Combustible.png',
	              label: Core.Translate.i18nJSON('Spontaneously Combustible')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Toxic_and_Infectious.png',
	              label: Core.Translate.i18nJSON('Toxic and Infectious')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Oxidizers.png',
	              label: Core.Translate.i18nJSON('Oxidizers')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Toxic_Gas.png',
	              label: Core.Translate.i18nJSON('Toxic Gas')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Unexploded_Ordnance.png',
	              label: Core.Translate.i18nJSON('Unexploded Ordnance')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Accident.png',
	              label: Core.Translate.i18nJSON('Air Accident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Hijacking.png',
	              label: Core.Translate.i18nJSON('Air Hijacking')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Theme.png',
	              label: Core.Translate.i18nJSON('Air')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Accident.png',
	              label: Core.Translate.i18nJSON('Marine Accident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Hijacking.png',
	              label: Core.Translate.i18nJSON('Marine Hijacking')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Theme.png',
	              label: Core.Translate.i18nJSON('Marine')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Accident.png',
	              label: Core.Translate.i18nJSON('Rail Accident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Hijacking.png',
	              label: Core.Translate.i18nJSON('Rail Hijacking')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Theme.png',
	              label: Core.Translate.i18nJSON('Rail')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Accident.png',
	              label: Core.Translate.i18nJSON('Vehicle Accident')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Hijacking.png',
	              label: Core.Translate.i18nJSON('Vehicle Hijacking')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Theme.png',
	              label: Core.Translate.i18nJSON('Vehicle')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S1.png',
	              label: Core.Translate.i18nJSON('Agricultural Laboratories S1')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S2.png',
	              label: Core.Translate.i18nJSON('Agricultural Laboratories S2')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S3.png',
	              label: Core.Translate.i18nJSON('Agricultural Laboratories S3')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S4.png',
	              label: Core.Translate.i18nJSON('Agricultural Laboratories S4')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S1.png',
	              label: Core.Translate.i18nJSON('Animal Feedlots S1')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S2.png',
	              label: Core.Translate.i18nJSON('Animal Feedlots S2')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S3.png',
	              label: Core.Translate.i18nJSON('Animal Feedlots S3')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S4.png',
	              label: Core.Translate.i18nJSON('Animal Feedlots S4')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S1.png',
	              label: Core.Translate.i18nJSON('Financial Exchanges S1')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S2.png',
	              label: Core.Translate.i18nJSON('Financial Exchanges S2')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S3.png',
	              label: Core.Translate.i18nJSON('Financial Exchanges S3')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S4.png',
	              label: Core.Translate.i18nJSON('Financial Exchanges S4')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Blank_Natural_Event_A.png',
	              label: Core.Translate.i18nJSON('Natural Event A')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Blank_Natural_Event_B.png',
	              label: Core.Translate.i18nJSON('Natural Event B')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_After_Shock.png',
	              label: Core.Translate.i18nJSON('After Shock')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Avalanche_ch.png',
	              label: Core.Translate.i18nJSON('Avalanche')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Earth_Quake_Epicenter.png',
	              label: Core.Translate.i18nJSON('Earth Quake Epicenter')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Landslide.png',
	              label: Core.Translate.i18nJSON('Landslide')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Subsidence.png',
	              label: Core.Translate.i18nJSON('Subsidence')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Volcanic_Eruption.png',
	              label: Core.Translate.i18nJSON('Volcanic Eruption')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Volcanic_Threat.png',
	              label: Core.Translate.i18nJSON('Volcanic threat')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Drizzle.png',
	              label: Core.Translate.i18nJSON('Drizzle')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Drought.png',
	              label: Core.Translate.i18nJSON('Drought')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Flood.png',
	              label: Core.Translate.i18nJSON('Flood')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Fog.png',
	              label: Core.Translate.i18nJSON('Fog')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Hail.png',
	              label: Core.Translate.i18nJSON('Hail')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Inversion.png',
	              label: Core.Translate.i18nJSON('Inversion')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Rain.png',
	              label: Core.Translate.i18nJSON('Rain')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Sand_Dust_Storm.png',
	              label: Core.Translate.i18nJSON('Sand Dust')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Snow.png',
	              label: Core.Translate.i18nJSON('Snow')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Thunder_Storm.png',
	              label: Core.Translate.i18nJSON('Thunder Storm')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tornado_ch.png',
	              label: Core.Translate.i18nJSON('Tornado')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tropical_Cyclone.png',
	              label: Core.Translate.i18nJSON('Cyclone')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tsunami_ch.png',
	              label: Core.Translate.i18nJSON('Tsunami')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Infestation_Bird_ch.png',
	              label: Core.Translate.i18nJSON('Bird Infestation')
	           },
	           {  
	               img:'images/drawmenu/markers/hsi/NaturalEvents/Infestation_Insect.png',
	              label: Core.Translate.i18nJSON('Insect Infestation')
	           }
	       ],
	       'Friendly Unit':[  
	           {  
	              label: Core.Translate.i18nJSON('COMBAT ARMS - Aviation'),
	               img:'images/drawmenu/markers/friendly/CST-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT ARMS - Engineer'),
	               img:'images/drawmenu/markers/friendly/engineer-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT ARMS - Field Artillery'),
	               img:'images/drawmenu/markers/friendly/basic-towed-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT ARMS - Infantry'),
	               img:'images/drawmenu/markers/friendly/infantry-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT ARMS - Special Forces'),
	               img:'images/drawmenu/markers/friendly/specialforces-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT SUPPORT - Aviation'),
	               img:'images/drawmenu/markers/friendly/cs-aviation.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT SUPPORT - Chemical'),
	               img:'images/drawmenu/markers/friendly/basic-chem-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT SUPPORT - Military Intelligence'),
	               img:'images/drawmenu/markers/friendly/militaryintel-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT SUPPORT - Military Police'),
	               img:'images/drawmenu/markers/friendly/militarypolice-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('COMBAT SUPPORT - Signal'),
	               img:'images/drawmenu/markers/friendly/comm-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Civil Affairs'),
	               img:'images/drawmenu/markers/friendly/civil_affairs.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('EOD'),
	               img:'images/drawmenu/markers/friendly/EOD.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fixed Wing'),
	               img:'images/drawmenu/markers/friendly/fixed_wing.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Mechanical Infantry'),
	               img:'images/drawmenu/markers/friendly/mech_infantry.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Medical'),
	               img:'images/drawmenu/markers/friendly/medical.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Medical Facility'),
	               img:'images/drawmenu/markers/friendly/medical_facility.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Military Exploitation UAV'),
	               img:'images/drawmenu/markers/friendly/mil_exploitation_uav.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Mobility Enhancement'),
	               img:'images/drawmenu/markers/friendly/mobility_enhancement.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Motor Transport'),
	               img:'images/drawmenu/markers/friendly/motor_transport.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Motorized Infantry'),
	               img:'images/drawmenu/markers/friendly/motorized_infantry.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Motorized Scouts'),
	               img:'images/drawmenu/markers/friendly/motorized_scouts.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Psyop'),
	               img:'images/drawmenu/markers/friendly/psyop.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Recon Cav'),
	               img:'images/drawmenu/markers/friendly/recon_cav.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Striver Lav'),
	               img:'images/drawmenu/markers/friendly/striker_lav.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Supply'),
	               img:'images/drawmenu/markers/friendly/supply.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Supply Trains'),
	               img:'images/drawmenu/markers/friendly/supply_trains.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Supply Transport'),
	               img:'images/drawmenu/markers/friendly/supply_transport.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Survey Team'),
	               img:'images/drawmenu/markers/friendly/survey_team.png'
	           }
	       ],
	       'Resource':[  
	           {  
	              label: Core.Translate.i18nJSON('Bn Medical Section'),
	               img:'images/drawmenu/markers/sig_sup_serv/bn_med_section.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class I'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_i.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class I Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_i_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class II'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_ii.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class II Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_ii_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class III'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_iii.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class III Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_iii_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class IV'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_iv.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class IV Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_iv_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class IX'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_ix.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class IX Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_ix_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class V'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_v.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class V Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_v_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VI'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_vi.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VI Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_vi_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VII'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_vii.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VII Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_vii_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VIII'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_viii.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class VIII Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_viii_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class X'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_x.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Class X Circle'),
	               img:'images/drawmenu/markers/sig_sup_serv/class_x_circle.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fld Cbt Trains'),
	               img:'images/drawmenu/markers/sig_sup_serv/fld_cbt_trains.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Mortuary'),
	               img:'images/drawmenu/markers/sig_sup_serv/mortuary.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Point'),
	               img:'images/drawmenu/markers/sig_sup_serv/point.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Point Maintenance'),
	               img:'images/drawmenu/markers/sig_sup_serv/point_maintenance.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Water'),
	               img:'images/drawmenu/markers/sig_sup_serv/water.png'
	           }
	       ],
	       'Mission':[  
	           {  
	              label: Core.Translate.i18nJSON('Structure No Damage: Low Risk, low probability of further collapse'),
	               img:'images/drawmenu/markers/usar/structure-no-damage.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('CBRN'),
	               img:'images/drawmenu/markers/mission/CBRN-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Communications'),
	               img:'images/drawmenu/markers/mission/communications-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Engineering'),
	               img:'images/drawmenu/markers/mission/engineering-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Logistics'),
	               img:'images/drawmenu/markers/mission/logistics-01.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Medical'),
	               img:'images/drawmenu/markers/mission/medical.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Security'),
	               img:'images/drawmenu/markers/mission/security.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Transportation'),
	               img:'images/drawmenu/markers/mission/transportation.png'
	           }
	       ],
	       'USAR':[  
	           {  
	              label: Core.Translate.i18nJSON('Structure No Damage: Low Risk, low probability of further collapse'),
	               img:'images/drawmenu/markers/usar/structure-no-damage.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Structure Damaged: Medium Risk, structure is moderately damaged'),
	               img:'images/drawmenu/markers/usar/structure-damaged.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Structure Failed: High Risk, may be subject to sudden collapse'),
	               img:'images/drawmenu/markers/usar/structure-failed.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Structure Destroyed: Complete destruction of structure'),
	               img:'images/drawmenu/markers/usar/structure-destroyed.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Assisted: Material assistance provided to residents'),
	               img:'images/drawmenu/markers/usar/assisted.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Evacuated: Survivors transported to collection point'),
	               img:'images/drawmenu/markers/usar/evacuated.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Rescued: Technical rescue that required physical intervention'),
	               img:'images/drawmenu/markers/usar/rescued.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Follow-Up Form: Additional information required not adequately described by symbol set'),
	               img:'images/drawmenu/markers/usar/followup-form.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Victim Detected: Potential victim detected (including canine alert or intelligence)'),
	               img:'images/drawmenu/markers/usar/victim-detected.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Confirmed Victim: Confirmed live survivor (visual, audible, physical confirmation)'),
	               img:'images/drawmenu/markers/usar/confirmed-victim.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Human Remains: Confirmed victim determined to be deceased'),
	               img:'images/drawmenu/markers/usar/human-remains.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Human Remains Removed: Human remains removed from specific location'),
	               img:'images/drawmenu/markers/usar/human-remains-removed.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Shelter in Place: Survivors have chosen to remain at location'),
	               img:'images/drawmenu/markers/usar/shelter-in-place.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Animal Issue: Issue including aggression, location, assistance needed, etc'),
	               img:'images/drawmenu/markers/usar/animal-issue.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Fire Incident: General fire occurrence'),
	               img:'images/drawmenu/markers/usar/fire-incident.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Hazardous Material Incident: Nuclear, biological, or chemical incident'),
	               img:'images/drawmenu/markers/usar/hazardous-material-incident.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Targeted Search: Specific location or condition requiring increased search effort'),
	               img:'images/drawmenu/markers/usar/targeted-search.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Flood/Water Level: Predetermined site for documentation of water line'),
	               img:'images/drawmenu/markers/usar/flood-water-level.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Helicopter Landing Site: Appropriate site for landing zone'),
	               img:'images/drawmenu/markers/usar/helicopter-landing-site.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Route Blocked: Inaccessible route by land or water'),
	               img:'images/drawmenu/markers/usar/route-blocked.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Extra 21: Mission specific placeholder to be determined (e.g. abandoned vehicle, commercial structure, evidence)'),
	               img:'images/drawmenu/markers/usar/extra-21.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Extra 22: Mission specific placeholder to be determined'),
	               img:'images/drawmenu/markers/usar/extra-22.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Extra 23: Mission specific placeholder to be determined'),
	               img:'images/drawmenu/markers/usar/extra-23.png'
	           },
	           {  
	              label: Core.Translate.i18nJSON('Extra 24: Mission specific placeholder to be determined'),
	               img:'images/drawmenu/markers/usar/extra-24.png'
	           }
               ]
	   }; 
	
});
