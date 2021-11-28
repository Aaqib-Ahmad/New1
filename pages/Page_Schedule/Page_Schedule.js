import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import {image_Ellipse_1_link} from './assets/imageLinks.js'
import {image_Ellipse_2_link} from './assets/imageLinks.js'
import {image_Ellipse_3_link} from './assets/imageLinks.js'
const Page_Schedule  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._Get_Started}    >
				<View style = {noneModeStyles._Rectangle_17}    >
				</View>
				<View style = {noneModeStyles._Rectangle_13}    >
				</View>
				<Text style = {noneModeStyles._Schedule}   >
					Schedule
				</Text>
				<View style = {noneModeStyles._Frame_30}    >
					<View style = {noneModeStyles._Group_33}    >
						<Text style = {noneModeStyles._08_00}   >
							08:00
						</Text>
						<View style = {noneModeStyles._Line_4}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_5}    >
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_22}    >
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._Ellipse_1_container}    >
							<View style = {noneModeStyles._Ellipse_1}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_1_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._Ellipse_2_container}    >
							<View style = {noneModeStyles._Ellipse_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_2_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._Ellipse_3_container}    >
							<View style = {noneModeStyles._Ellipse_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_3_link}}/>
							</View>
						</View>
					</View>
				</View>
					<View style = {noneModeStyles._Group_34}    >
						<Text style = {noneModeStyles._09_00}   >
							09:00
						</Text>
						<View style = {noneModeStyles._Line_4_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_35}    >
						<Text style = {noneModeStyles._10_00}   >
							10:00
						</Text>
						<View style = {noneModeStyles._Line_4_3}    >
						</View>
					</View>
					<View style = {noneModeStyles._Group_36}    >
						<Text style = {noneModeStyles._11_00}   >
							11:00
						</Text>
						<View style = {noneModeStyles._Line_4_4}    >
						</View>
					</View>
				</View>
				
				<View style = {noneModeStyles._Group_42}    >
					<View style = {noneModeStyles._Rectangle_3_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_22_2}    >
					</View>
					<View style = {noneModeStyles._Frame_31_2}    >
						<Text style = {noneModeStyles._Client_Meeting}   >
							Client Meeting
						</Text>
						<Text style = {noneModeStyles._1_hours}   >
							1 hours
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_16}    >
				</View>
				<View style = {noneModeStyles._Group_44}    >
					<View style = {noneModeStyles._Calendar}    >
						<View style = {noneModeStyles._Frame_15}    >
							<View style = {noneModeStyles._Item_Caledar}    >
								<View style = {noneModeStyles._Frame_22}    >
									<Text style = {noneModeStyles._Sun}   >
										Sun
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_2}    >
								<View style = {noneModeStyles._Frame_22_2}    >
									<Text style = {noneModeStyles._Sun_2}   >
										Mon
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_3}    >
								<View style = {noneModeStyles._Frame_22_3}    >
									<Text style = {noneModeStyles._Sun_3}   >
										Tue
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_4}    >
								<View style = {noneModeStyles._Frame_22_4}    >
									<Text style = {noneModeStyles._Sun_4}   >
										Wed
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_5}    >
								<View style = {noneModeStyles._Frame_22_5}    >
									<Text style = {noneModeStyles._Sun_5}   >
										Thu
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_6}    >
								<View style = {noneModeStyles._Frame_22_6}    >
									<Text style = {noneModeStyles._Sun_6}   >
										Fri
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_7}    >
								<View style = {noneModeStyles._Frame_22_7}    >
									<Text style = {noneModeStyles._Sun_7}   >
										Sat
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_20}    >
							<View style = {noneModeStyles._Item_Caledar_8}    >
								<View style = {noneModeStyles._Frame_22_8}    >
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_9}    >
								<View style = {noneModeStyles._Frame_22_9}    >
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_10}    >
								<View style = {noneModeStyles._Frame_22_10}    >
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_11}    >
								<View style = {noneModeStyles._Frame_22_11}    >
									<Text style = {noneModeStyles._1}   >
										1
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_12}    >
								<View style = {noneModeStyles._Frame_22_12}    >
									<View style = {noneModeStyles._Frame_23}    >
										<View style = {noneModeStyles._Ellipse_4}    >
										</View>
									</View>
									<Text style = {noneModeStyles._1_2}   >
										2
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_13}    >
								<View style = {noneModeStyles._Frame_22_13}    >
									<Text style = {noneModeStyles._1_3}   >
										3
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_14}    >
								<View style = {noneModeStyles._Frame_22_14}    >
									<Text style = {noneModeStyles._1_4}   >
										4
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_21}    >
							<View style = {noneModeStyles._Item_Caledar_15}    >
								<View style = {noneModeStyles._Frame_22_15}    >
									<Text style = {noneModeStyles._1_5}   >
										5
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_16}    >
								<View style = {noneModeStyles._Frame_22_16}    >
									<Text style = {noneModeStyles._1_6}   >
										6
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_17}    >
								<View style = {noneModeStyles._Frame_22_17}    >
									<Text style = {noneModeStyles._1_7}   >
										7
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_18}    >
								<View style = {noneModeStyles._Frame_22_18}    >
									<Text style = {noneModeStyles._1_8}   >
										8
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_19}    >
								<View style = {noneModeStyles._Frame_22_19}    >
									<Text style = {noneModeStyles._1_9}   >
										9
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_20}    >
								<View style = {noneModeStyles._Frame_22_20}    >
									<View style = {noneModeStyles._Frame_23_2}    >
										<View style = {noneModeStyles._Ellipse_4_2}    >
										</View>
										<View style = {noneModeStyles._Ellipse_5}    >
										</View>
										<View style = {noneModeStyles._Ellipse_6}    >
										</View>
									</View>
									<Text style = {noneModeStyles._1_10}   >
										10
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_21}    >
								<View style = {noneModeStyles._Frame_22_21}    >
									<Text style = {noneModeStyles._1_11}   >
										11
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_22_22}    >
							<View style = {noneModeStyles._Item_Caledar_22}    >
								<View style = {noneModeStyles._Frame_22_23}    >
									<Text style = {noneModeStyles._1_12}   >
										12
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_23}    >
								<View style = {noneModeStyles._Frame_22_24}    >
									<Text style = {noneModeStyles._1_13}   >
										13
									</Text>
									<View style = {noneModeStyles._Rectangle_10}    >
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_24}    >
								<View style = {noneModeStyles._Frame_22_25}    >
									<Text style = {noneModeStyles._1_14}   >
										14
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_25}    >
								<View style = {noneModeStyles._Frame_22_26}    >
									<View style = {noneModeStyles._Rectangle_10_2}    >
									</View>
									<View style = {noneModeStyles._Frame_23_3}    >
										<View style = {noneModeStyles._Ellipse_4_3}    >
										</View>
									</View>
									<Text style = {noneModeStyles._1_15}   >
										15
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_26}    >
								<View style = {noneModeStyles._Frame_22_27}    >
									<Text style = {noneModeStyles._1_16}   >
										16
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_27}    >
								<View style = {noneModeStyles._Frame_22_28}    >
									<Text style = {noneModeStyles._1_17}   >
										17
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_28}    >
								<View style = {noneModeStyles._Frame_22_29}    >
									<Text style = {noneModeStyles._1_18}   >
										18
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_23_4}    >
							<View style = {noneModeStyles._Item_Caledar_29}    >
								<View style = {noneModeStyles._Frame_22_30}    >
									<Text style = {noneModeStyles._1_19}   >
										19
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_30}    >
								<View style = {noneModeStyles._Frame_22_31}    >
									<Text style = {noneModeStyles._1_20}   >
										20
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_31}    >
								<View style = {noneModeStyles._Frame_22_32}    >
									<Text style = {noneModeStyles._1_21}   >
										21
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_32}    >
								<View style = {noneModeStyles._Frame_22_33}    >
									<Text style = {noneModeStyles._1_22}   >
										22
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_33}    >
								<View style = {noneModeStyles._Frame_22_34}    >
									<Text style = {noneModeStyles._1_23}   >
										23
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_34}    >
								<View style = {noneModeStyles._Frame_22_35}    >
									<Text style = {noneModeStyles._1_24}   >
										24
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_35}    >
								<View style = {noneModeStyles._Frame_22_36}    >
									<Text style = {noneModeStyles._1_25}   >
										25
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_24}    >
							<View style = {noneModeStyles._Item_Caledar_36}    >
								<View style = {noneModeStyles._Frame_22_37}    >
									<Text style = {noneModeStyles._1_26}   >
										26
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_37}    >
								<View style = {noneModeStyles._Frame_22_38}    >
									<Text style = {noneModeStyles._1_27}   >
										27
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_38}    >
								<View style = {noneModeStyles._Frame_22_39}    >
									<Text style = {noneModeStyles._1_28}   >
										28
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_39}    >
								<View style = {noneModeStyles._Frame_22_40}    >
									<Text style = {noneModeStyles._1_29}   >
										28
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_40}    >
								<View style = {noneModeStyles._Frame_22_41}    >
									<Text style = {noneModeStyles._1_30}   >
										29
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_41}    >
								<View style = {noneModeStyles._Frame_22_42}    >
									<View style = {noneModeStyles._Frame_23_5}    >
										<View style = {noneModeStyles._Ellipse_4_4}    >
										</View>
										<View style = {noneModeStyles._Ellipse_5_2}    >
										</View>
										<View style = {noneModeStyles._Ellipse_6_2}    >
										</View>
									</View>
									<Text style = {noneModeStyles._1_31}   >
										30
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Item_Caledar_42}    >
								<View style = {noneModeStyles._Frame_22_43}    >
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_43}    >
						<View style = {noneModeStyles._Frame_21_2}    >
							<Text style = {noneModeStyles._2021}   >
								2021
							</Text>
							<Text style = {noneModeStyles._September}   >
								September
							</Text>
						</View>
						<View style = {noneModeStyles._vuesax_bulk_add}    >
							<View style = {noneModeStyles._vuesax_bulk_add_2}    >
								<View style = {noneModeStyles._add}    >
									<View style = {noneModeStyles._layer_5e57b2}    >
										<View style = {noneModeStyles._layer_88446c}   >
											<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
												<Path fill = {"#1665FA"}     d = "M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0Z"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._layer_d47ad3}    >
										<View style = {noneModeStyles._layer_db5562}   >
											<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
												<Path fill = {"#1665FA"}     d = "M13.2222 6.22222H7.77778V0.777778C7.77778 0.352593 7.42519 0 7 0C6.57481 0 6.22222 0.352593 6.22222 0.777778V6.22222H0.777778C0.352593 6.22222 0 6.57481 0 7C0 7.42519 0.352593 7.77778 0.777778 7.77778H6.22222V13.2222C6.22222 13.6474 6.57481 14 7 14C7.42519 14 7.77778 13.6474 7.77778 13.2222V7.77778H13.2222C13.6474 7.77778 14 7.42519 14 7C14 6.57481 13.6474 6.22222 13.2222 6.22222Z"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._layer_f75467}    >
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._vuesax_bold_notification_status}    >
							<View style = {noneModeStyles._vuesax_bold_notification_status_2}    >
								<View style = {noneModeStyles._notification_status}    >
									<View style = {noneModeStyles._layer_9081be}    >
										<View style = {noneModeStyles._layer_b35bbc}   >
											<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
												<Path fill = {"#26CDFC"}     d = "M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._layer_81d598}    >
										<View style = {noneModeStyles._layer_4d4284}   >
											<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
												<Path fill = {"#F0F0F0"}     d = "M17.8 6.42C17.78 6.42 17.76 6.43 17.74 6.43C17.64 6.45 17.54 6.46 17.43 6.48C17.01 6.52 16.56 6.5 16.1 6.41C15.98 6.38 15.88 6.36 15.77 6.32C15.44 6.24 15.13 6.11 14.84 5.94C14.72 5.88 14.6 5.8 14.49 5.73C14.01 5.4 13.6 4.99 13.27 4.51C13.2 4.4 13.12 4.28 13.06 4.16C12.89 3.87 12.76 3.56 12.68 3.23C12.64 3.12 12.62 3.02 12.59 2.9C12.5 2.44 12.48 1.99 12.52 1.57C12.54 1.46 12.55 1.36 12.57 1.26C12.57 1.24 12.58 1.22 12.58 1.2C12.7 0.58 12.24 0 11.6 0H5.52C5.38 0 5.24 0.00999998 5.11 0.02C4.99 0.03 4.88 0.0399999 4.76 0.0599999C4.64 0.0699999 4.52 0.0899999 4.41 0.11C2 0.46 0.46 1.99 0.11 4.41C0.0899999 4.52 0.0699999 4.64 0.0599999 4.76C0.0399999 4.88 0.03 4.99 0.02 5.11C0.00999998 5.24 0 5.38 0 5.52V13.48C0 13.62 0.00999998 13.76 0.02 13.89C0.03 14.01 0.0399999 14.12 0.0599999 14.24C0.0699999 14.36 0.0899999 14.48 0.11 14.59C0.46 17.01 2 18.54 4.41 18.89C4.52 18.91 4.64 18.93 4.76 18.94C4.88 18.96 4.99 18.97 5.11 18.98C5.24 18.99 5.38 19 5.52 19H13.48C13.62 19 13.76 18.99 13.89 18.98C14.01 18.97 14.12 18.96 14.24 18.94C14.36 18.93 14.48 18.91 14.59 18.89C17 18.54 18.54 17.01 18.89 14.59C18.91 14.48 18.93 14.36 18.94 14.24C18.96 14.12 18.97 14.01 18.98 13.89C18.99 13.76 19 13.62 19 13.48V7.4C19 6.76 18.42 6.3 17.8 6.42ZM4.75 9.5H9.75C10.16 9.5 10.5 9.84 10.5 10.25C10.5 10.66 10.16 11 9.75 11H4.75C4.34 11 4 10.66 4 10.25C4 9.84 4.34 9.5 4.75 9.5ZM13.75 15H4.75C4.34 15 4 14.66 4 14.25C4 13.84 4.34 13.5 4.75 13.5H13.75C14.16 13.5 14.5 13.84 14.5 14.25C14.5 14.66 14.16 15 13.75 15Z"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._layer_ea7783}    >
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_47}    >
					<View style = {noneModeStyles._Group_45}    >
						<View style = {noneModeStyles._Rectangle_27}    >
						</View>
						<View style = {noneModeStyles._Frame_46}    >
							<View style = {noneModeStyles._vuesax_bulk_calendar}    >
								<View style = {noneModeStyles._vuesax_bulk_calendar_2}    >
									<View style = {noneModeStyles._calendar}    >
										<View style = {noneModeStyles._layer_1fadf3}    >
										</View>
										<View style = {noneModeStyles._layer_d454bf}    >
											<View style = {noneModeStyles._layer_b0fd16}   >
												<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
													<Path fill = {"#1665FA"}     d = "M13.7695 2.31983V0.753192C13.7695 0.341447 13.4281 0 13.0163 0C12.6046 0 12.2631 0.341447 12.2631 0.753192V2.25958H5.73548V0.753192C5.73548 0.341447 5.39403 0 4.98228 0C4.57054 0 4.22909 0.341447 4.22909 0.753192V2.31983C1.5176 2.57089 0.202023 4.18775 0.00117165 6.58792C-0.0189135 6.87916 0.222108 7.12018 0.5033 7.12018H17.4953C17.7866 7.12018 18.0276 6.86911 17.9974 6.58792C17.7966 4.18775 16.481 2.57089 13.7695 2.31983Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_620afe}    >
											<View style = {noneModeStyles._layer_0f0cbd}   >
												<Svg style={{height: 13, width: 18}} viewBox = "0 0 18 13">
													<Path fill = {"#1665FA"}     d = "M17 0C17.55 0 18 0.45 18 1V7.16C18 10.16 16.5 12.16 13 12.16H5C1.5 12.16 0 10.16 0 7.16V1C0 0.45 0.45 0 1 0H17Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._Group}    >
											<View style = {noneModeStyles._layer_c8fdb7}    >
												<View style = {noneModeStyles._layer_0e9063}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 1.9989C0.74 1.9989 0.480001 1.88889 0.290001 1.70889C0.110001 1.51889 0 1.2589 0 0.998897C0 0.738897 0.110001 0.478905 0.290001 0.288905C0.570001 0.00890517 1.01 -0.0811168 1.38 0.0788832C1.51 0.128883 1.62 0.198905 1.71 0.288905C1.89 0.478905 2 0.738897 2 0.998897C2 1.2589 1.89 1.51889 1.71 1.70889C1.52 1.88889 1.26 1.9989 1 1.9989Z"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Group_2}    >
											<View style = {noneModeStyles._layer_8110c9}    >
												<View style = {noneModeStyles._layer_d35ce5}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 1.9989C0.74 1.9989 0.480001 1.88889 0.290001 1.70889C0.110001 1.51889 0 1.2589 0 0.998897C0 0.738897 0.110001 0.478905 0.290001 0.288905C0.380001 0.198905 0.489999 0.128883 0.619999 0.0788832C0.989999 -0.0811168 1.43 0.00890517 1.71 0.288905C1.89 0.478905 2 0.738897 2 0.998897C2 1.2589 1.89 1.51889 1.71 1.70889C1.66 1.74889 1.61 1.78888 1.56 1.82888C1.5 1.86888 1.44 1.89891 1.38 1.91891C1.32 1.94891 1.26 1.96891 1.2 1.97891C1.13 1.98891 1.07 1.9989 1 1.9989Z"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Group_3}    >
											<View style = {noneModeStyles._layer_bd5a93}    >
												<View style = {noneModeStyles._layer_0b35c3}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 2.00001C0.74 2.00001 0.480001 1.89 0.290001 1.71C0.110001 1.52 0 1.26001 0 1.00001C0 0.740012 0.110001 0.48002 0.290001 0.29002C0.390001 0.20002 0.489999 0.129998 0.619999 0.0799982C0.799999 -1.81049e-06 1 -0.0199994 1.2 0.0200006C1.26 0.0300006 1.32 0.0499982 1.38 0.0799982C1.44 0.0999982 1.5 0.130025 1.56 0.170025C1.61 0.210025 1.66 0.25002 1.71 0.29002C1.89 0.48002 2 0.740012 2 1.00001C2 1.26001 1.89 1.52 1.71 1.71C1.66 1.75 1.61 1.79 1.56 1.83C1.5 1.87 1.44 1.90003 1.38 1.92002C1.32 1.95002 1.26 1.97002 1.2 1.98002C1.13 1.99002 1.06 2.00001 1 2.00001Z"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Group_4}    >
											<View style = {noneModeStyles._layer_6358b1}    >
												<View style = {noneModeStyles._layer_427886}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 2.00001C0.87 2.00001 0.739999 1.97002 0.619999 1.92002C0.489999 1.87003 0.390001 1.8 0.290001 1.71C0.110001 1.52 0 1.26001 0 1.00001C0 0.740012 0.110001 0.48002 0.290001 0.29002C0.390001 0.20002 0.489999 0.129998 0.619999 0.0799982C0.799999 -1.81049e-06 1 -0.0199994 1.2 0.0200006C1.26 0.0300006 1.32 0.0499982 1.38 0.0799982C1.44 0.0999982 1.5 0.130025 1.56 0.170025C1.61 0.210025 1.66 0.25002 1.71 0.29002C1.89 0.48002 2 0.740012 2 1.00001C2 1.26001 1.89 1.52 1.71 1.71C1.66 1.75 1.61 1.8 1.56 1.83C1.5 1.87 1.44 1.90003 1.38 1.92002C1.32 1.95002 1.26 1.97002 1.2 1.98002C1.13 1.99002 1.07 2.00001 1 2.00001Z"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Group_5}    >
											<View style = {noneModeStyles._layer_2b8c28}    >
												<View style = {noneModeStyles._layer_ba4c17}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 1.98749C0.74 1.98749 0.480001 1.87748 0.290001 1.69748C0.110001 1.50748 0 1.24749 0 0.987491C0 0.727491 0.110001 0.4675 0.290001 0.2775C0.660001 -0.0925 1.34 -0.0925 1.71 0.2775C1.89 0.4675 2 0.727491 2 0.987491C2 1.24749 1.89 1.50748 1.71 1.69748C1.52 1.87748 1.26 1.98749 1 1.98749Z"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Group_6}    >
											<View style = {noneModeStyles._layer_17118e}    >
												<View style = {noneModeStyles._layer_18090e}   >
													<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
														<Path fill = {"#1665FA"}     d = "M1 1.98749C0.74 1.98749 0.480001 1.87748 0.290001 1.69748C0.110001 1.50748 0 1.24749 0 0.987491C0 0.727491 0.110001 0.4675 0.290001 0.2775C0.660001 -0.0925 1.34 -0.0925 1.71 0.2775C1.89 0.4675 2 0.727491 2 0.987491C2 1.24749 1.89 1.50748 1.71 1.69748C1.52 1.87748 1.26 1.98749 1 1.98749Z"/>
													</Svg>
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._Calendar_2}   >
								Calendar
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Group_46}    >
						<View style = {noneModeStyles._Rectangle_27_2}    >
						</View>
						<View style = {noneModeStyles._Frame_46_2}    >
							<View style = {noneModeStyles._vuesax_twotone_briefcase}    >
								<View style = {noneModeStyles._vuesax_twotone_briefcase_2}    >
									<View style = {noneModeStyles._briefcase}    >
										<View style = {noneModeStyles._layer_d6e119}    >
											<View style = {noneModeStyles._layer_98cf26}   >
												<Svg style={{height: 18, width: 22}} viewBox = "0 0 22 18">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M6.68651 17.2286H14.9151C19.0499 17.2286 19.7905 15.5726 20.0065 13.5566L20.7779 5.328C21.0557 2.81829 20.3357 0.771429 15.9437 0.771429H5.65794C1.26594 0.771429 0.545938 2.81829 0.823652 5.328L1.59508 13.5566C1.81108 15.5726 2.55165 17.2286 6.68651 17.2286Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_cd1d66}    >
											<View style = {noneModeStyles._layer_0401d2}   >
												<Svg style={{height: 6, width: 10}} viewBox = "0 0 10 6">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.789474 5V4.15789C0.789474 2.29474 0.789473 0.789474 4.15789 0.789474H5.84211C9.21053 0.789474 9.21053 2.29474 9.21053 4.15789V5"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._Group_638}    >
											<View style = {noneModeStyles._layer_02f155}    >
												<View style = {noneModeStyles._layer_5160fe}   >
													<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
														<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M5.18182 1.90909V3C5.18182 3.01091 5.18182 3.01091 5.18182 3.02182C5.18182 4.21091 5.17091 5.18182 3 5.18182C0.84 5.18182 0.818182 4.22182 0.818182 3.03273V1.90909C0.818182 0.818182 0.818182 0.818182 1.90909 0.818182H4.09091C5.18182 0.818182 5.18182 0.818182 5.18182 1.90909Z"/>
													</Svg>
												</View>
											</View>
											<View style = {noneModeStyles._layer_42584a}    >
												<View style = {noneModeStyles._layer_ca2407}   >
													<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
														<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M9.18028 0.819726C6.65573 2.65576 3.77053 3.74864 0.819759 4.12022"/>
													</Svg>
												</View>
											</View>
											<View style = {noneModeStyles._layer_81056a}    >
												<View style = {noneModeStyles._layer_c65bb6}   >
													<Svg style={{height: 5, width: 9}} viewBox = "0 0 9 5">
														<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.760186 0.760186C3.04056 2.32097 5.61485 3.26353 8.23981 3.55744"/>
													</Svg>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._layer_c88b40}    >
										</View>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._Project}   >
								Project
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Group_47}    >
						<View style = {noneModeStyles._Rectangle_27_3}    >
						</View>
						<View style = {noneModeStyles._Frame_46_3}    >
							<View style = {noneModeStyles._vuesax_twotone_stickynote}    >
								<View style = {noneModeStyles._vuesax_twotone_stickynote_2}    >
									<View style = {noneModeStyles._stickynote}    >
										<View style = {noneModeStyles._layer_0fcfa0}    >
											<View style = {noneModeStyles._layer_e5250e}   >
												<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.833333 0.833333V4.16667"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_b1297d}    >
											<View style = {noneModeStyles._layer_bb8f3e}   >
												<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.833333 0.833333V4.16667"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_e447d3}    >
											<View style = {noneModeStyles._layer_e95392}   >
												<Svg style={{height: 2, width: 10}} viewBox = "0 0 10 2">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.789474 0.789474H9.21053"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_e87f85}    >
											<View style = {noneModeStyles._layer_0f35bb}   >
												<Svg style={{height: 2, width: 7}} viewBox = "0 0 7 2">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.807692 0.807692H6.19231"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_afba5e}    >
											<View style = {noneModeStyles._layer_e5e4c6}   >
												<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M12.75 19.25H6.75C1.75 19.25 0.75 17.19 0.75 13.07V6.9C0.75 2.2 2.42 0.94 5.75 0.75H13.75C17.08 0.93 18.75 2.2 18.75 6.9V13.25"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_2dfc1e}    >
											<View style = {noneModeStyles._layer_70063b}   >
												<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M7.19997 0.799997L0.799997 7.19997V3.99998C0.799997 1.86666 1.86666 0.799997 3.99998 0.799997H7.19997Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_049638}    >
										</View>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._Task}   >
								Task
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Group_48}    >
						<View style = {noneModeStyles._Rectangle_27_4}    >
						</View>
						<View style = {noneModeStyles._Frame_46_4}    >
							<View style = {noneModeStyles._vuesax_twotone_setting_2}    >
								<View style = {noneModeStyles._vuesax_twotone_setting_2_2}    >
									<View style = {noneModeStyles._setting_2}    >
										<View style = {noneModeStyles._layer_008650}    >
											<View style = {noneModeStyles._layer_84e44d}   >
												<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M4 7.2C5.76731 7.2 7.2 5.76731 7.2 4C7.2 2.23269 5.76731 0.8 4 0.8C2.23269 0.8 0.8 2.23269 0.8 4C0.8 5.76731 2.23269 7.2 4 7.2Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_91aa01}    >
											<View style = {noneModeStyles._layer_4c65c6}   >
												<Svg style={{height: 21, width: 22}} viewBox = "0 0 22 21">
													<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {1.5} d = "M0.767085 11.3217V9.52164C0.767085 8.45795 1.63645 7.57836 2.71037 7.57836C4.5616 7.57836 5.31845 6.2692 4.38772 4.66344C3.85588 3.74294 4.17294 2.54628 5.10367 2.01444L6.87308 1.00189C7.68107 0.521181 8.72431 0.807559 9.20502 1.61555L9.31752 1.80988C10.238 3.41565 11.7517 3.41565 12.6825 1.80988L12.795 1.61555C13.2757 0.807559 14.3189 0.521181 15.1269 1.00189L16.8963 2.01444C17.827 2.54628 18.1441 3.74294 17.6123 4.66344C16.6815 6.2692 17.4384 7.57836 19.2896 7.57836C20.3533 7.57836 21.2329 8.44772 21.2329 9.52164V11.3217C21.2329 12.3854 20.3635 13.265 19.2896 13.265C17.4384 13.265 16.6815 14.5742 17.6123 16.1799C18.1441 17.1107 17.827 18.2971 16.8963 18.8289L15.1269 19.8415C14.3189 20.3222 13.2757 20.0358 12.795 19.2278L12.6825 19.0335C11.762 17.4277 10.2483 17.4277 9.31752 19.0335L9.20502 19.2278C8.72431 20.0358 7.68107 20.3222 6.87308 19.8415L5.10367 18.8289C4.17294 18.2971 3.85588 17.1004 4.38772 16.1799C5.31845 14.5742 4.5616 13.265 2.71037 13.265C1.63645 13.265 0.767085 12.3854 0.767085 11.3217Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles._layer_ad51c4}    >
										</View>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._Settings}   >
								Settings
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Schedule

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(255, 255, 255, 0.4)",
	},
_Get_Started: {
	width: 375,
	height: 812,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 16,
	borderRadius: 40,
	},
_Rectangle_17: {
	width: 375,
	height: 812,
	backgroundColor: "rgba(255, 255, 255, 0.3)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_13: {
	width: 375,
	height: 380,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 437,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(189, 189, 189)",
	},
_Schedule: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 25,
	top: 461,
	color: "rgb(32, 38, 48)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_30: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 24,
	top: 509,
	},
_Group_33: {
	width: 351,
	height: 16,
	flexShrink: 0,
	marginBottom: 56,
	},
_08_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_4: {
	width: 299,
	height: 0,
	position: "absolute",
	left: 52,
	top: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_Group_34: {
	width: 351,
	height: 16,
	flexShrink: 0,
	marginBottom: 56,
	},
_09_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_4_2: {
	width: 299,
	height: 0,
	position: "absolute",
	left: 52,
	top: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_Group_35: {
	width: 351,
	height: 16,
	flexShrink: 0,
	marginBottom: 56,
	},
_10_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_4_3: {
	width: 299,
	height: 0,
	position: "absolute",
	left: 52,
	top: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_Group_36: {
	width: 351,
	height: 16,
	flexShrink: 0,
	marginBottom: 56,
	},
_11_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_4_4: {
	width: 299,
	height: 0,
	position: "absolute",
	left: 52,
	top: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_Group_37: {
	width: 351,
	height: 16,
	flexShrink: 0,
	},
_12_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_4_5: {
	width: 299,
	height: 0,
	position: "absolute",
	left: 52,
	top: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_Group_5: {
	width: 280,
	height: 116,
	position: "absolute",
	left: 76,
	top: 522,
	},
_Rectangle_3: {
	width: 280,
	height: 116,
	backgroundColor: "rgb(225, 248, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 8,
	},
_Rectangle_22: {
	width: 32,
	height: 4,
	backgroundColor: "rgb(38, 205, 252)",
	position: "absolute",
	left: 16,
	top: 12,
	borderRadius: 4,
	},
_Frame_31: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 20,
	},
_Sprint_Plan_Week__1: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(32, 38, 48)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_5_hours: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(32, 38, 48, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_4: {
	width: 56,
	height: 24,
	position: "absolute",
	left: 16,
	top: 80,
	},
_Ellipse_1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_1: {
	width: "100%",
	height: "100%",
	},
_Ellipse_2_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 16,
	top: 0,
	},
_Ellipse_2: {
	width: "100%",
	height: "100%",
	},
_Ellipse_3_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 32,
	top: 0,
	},
_Ellipse_3: {
	width: "100%",
	height: "100%",
	},
_Group_42: {
	width: 280,
	height: 67,
	position: "absolute",
	left: 76,
	top: 664,
	},
_Rectangle_3_2: {
	width: 280,
	height: 67,
	backgroundColor: "rgb(255, 232, 224)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 8,
	},
_Rectangle_22_2: {
	width: 32,
	height: 4,
	backgroundColor: "rgb(255, 101, 51)",
	position: "absolute",
	left: 16,
	top: 12,
	borderRadius: 4,
	},
_Frame_31_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 20,
	},
_Client_Meeting: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(32, 38, 48)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_hours: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(32, 38, 48, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_16: {
	width: 24,
	height: 4,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 176,
	top: 425,
	borderRadius: 4,
	},
_Group_44: {
	width: 365,
	height: 360,
	position: "absolute",
	left: 5,
	top: 48,
	},
_Calendar: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 56,
	},
_Frame_15: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Item_Caledar: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -11.5},
	],
	color: "rgba(32, 38, 48, 0.3)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_2: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_2: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -13.5},
	],
	color: "rgba(32, 38, 48, 0.6)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_3: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_3: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -10.5},
	],
	color: "rgba(32, 38, 48, 0.6)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_4: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_4: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -13.5},
	],
	color: "rgba(32, 38, 48, 0.6)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_5: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_5: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -11.5},
	],
	color: "rgba(32, 38, 48, 0.6)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_6: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_6: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgba(32, 38, 48, 0.6)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_7: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_7: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Sun_7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -9.5},
	],
	color: "rgba(32, 38, 48, 0.3)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_20: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Item_Caledar_8: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_8: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Item_Caledar_9: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_9: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Item_Caledar_10: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_10: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Item_Caledar_11: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_11: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -2.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_12: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_12: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Frame_23: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -0.5},
		{translateY: 9},
	],
	},
_Ellipse_4: {
	width: 2,
	height: 2,
	flexShrink: 0,
	},
_1_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -4.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_13: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_13: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_14: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_14: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_21: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Item_Caledar_15: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_15: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_16: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_16: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_17: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_17: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_18: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_18: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_19: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_19: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -3.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_20: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_20: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Frame_23_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	position: "absolute",
	left: 19,
	top: 31,
	},
_Ellipse_4_2: {
	width: 2,
	height: 2,
	flexShrink: 0,
	marginRight: 2,
	},
_Ellipse_5: {
	width: 2,
	height: 2,
	flexShrink: 0,
	marginRight: 2,
	},
_Ellipse_6: {
	width: 2,
	height: 2,
	flexShrink: 0,
	},
_1_10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_21: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_21: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -5.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_22_22: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Item_Caledar_22: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_23: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_23: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_24: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(246, 248, 249)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Rectangle_10: {
	width: 28,
	height: 28,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 10,
	top: 8,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(246, 248, 249)",
	borderRadius: 6,
	},
_Item_Caledar_24: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_25: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_25: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_26: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Rectangle_10_2: {
	width: 30,
	height: 30,
	backgroundColor: "rgb(237, 240, 247)",
	position: "absolute",
	left: 9,
	top: 7,
	borderRadius: 6,
	},
_Frame_23_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	position: "absolute",
	left: "50%",
	top: 31,
	transform: [
		{translateX: -0.5},
	],
	},
_Ellipse_4_3: {
	width: 2,
	height: 2,
	flexShrink: 0,
	},
_1_15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(32, 38, 48)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_26: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_27: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_27: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_28: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_28: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_29: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_18: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_23_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Item_Caledar_29: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_30: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_30: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_31: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_31: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_32: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -6.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_32: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_33: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_22: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_33: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_34: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_23: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_34: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_35: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_24: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_35: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_36: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_25: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_24: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	},
_Item_Caledar_36: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_37: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_26: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_37: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_38: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_27: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_38: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_39: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_28: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_39: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_40: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_29: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_40: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_41: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_1_30: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -7.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_41: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 6,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_42: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Frame_23_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	position: "absolute",
	left: 19,
	top: 31,
	},
_Ellipse_4_4: {
	width: 2,
	height: 2,
	flexShrink: 0,
	marginRight: 2,
	},
_Ellipse_5_2: {
	width: 2,
	height: 2,
	flexShrink: 0,
	marginRight: 2,
	},
_Ellipse_6_2: {
	width: 2,
	height: 2,
	flexShrink: 0,
	},
_1_31: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 14.5,
	transform: [
		{translateX: -8.5},
	],
	color: "rgb(41, 45, 50)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Item_Caledar_42: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 10,
	paddingBottom: 8,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Frame_22_43: {
	width: 47,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Group_43: {
	width: 341,
	height: 48,
	position: "absolute",
	left: 11,
	top: 0,
	},
_Frame_21_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 0,
	},
_2021: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 2,
	color: "rgb(32, 38, 48)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_September: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(32, 38, 48)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_bulk_add: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 317,
	top: 17,
	},
_vuesax_bulk_add_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_add: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_5e57b2: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_layer_88446c: {
	},
_layer_d47ad3: {
	position: "absolute",
	transform: [
		{translateX: 5.25},
		{translateY: 5.25},
	],
	},
_layer_db5562: {
	},
_layer_f75467: {
	position: "absolute",
	},
_vuesax_bold_notification_status: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 277,
	top: 17,
	},
_vuesax_bold_notification_status_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_notification_status: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_9081be: {
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 2},
	],
	},
_layer_b35bbc: {
	},
_layer_81d598: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
_layer_4d4284: {
	},
_layer_ea7783: {
	position: "absolute",
	},
_Frame_47: {
	width: "auto",
	height: 64,
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 0,
	top: 748,
	shadowOffset: {
		width: 0,
		height: -4
	},
	shadowColor: "rgba(247,249,250,0.8)",
	shadowRadius: 8,
	},
_Group_45: {
	width: 93.75,
	height: 56,
	flexShrink: 0,
	},
_Rectangle_27: {
	width: 93.75,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_46: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 25,
	top: 10,
	},
_vuesax_bulk_calendar: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 2,
	},
_vuesax_bulk_calendar_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_calendar: {
	width: 24,
	height: 24,
	position: "absolute",
	},
_layer_1fadf3: {
	position: "absolute",
	},
_layer_d454bf: {
	position: "absolute",
	transform: [
		{translateX: 3.03883},
		{translateY: 1.25},
	],
	},
_layer_b0fd16: {
	},
_layer_620afe: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 9.83997},
	],
	},
_layer_0f0cbd: {
	},
_Group: {
	width: 2,
	height: 1.9989,
	position: "absolute",
	transform: [
		{translateX: 7.5},
		{translateY: 13.0011},
	],
	},
_layer_c8fdb7: {
	position: "absolute",
	},
_layer_0e9063: {
	},
_Group_2: {
	width: 2,
	height: 1.9989,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 13.0011},
	],
	},
_layer_8110c9: {
	position: "absolute",
	},
_layer_d35ce5: {
	},
_Group_3: {
	width: 2,
	height: 2,
	position: "absolute",
	transform: [
		{translateX: 14.5},
		{translateY: 13},
	],
	},
_layer_bd5a93: {
	position: "absolute",
	},
_layer_0b35c3: {
	},
_Group_4: {
	width: 2,
	height: 2,
	position: "absolute",
	transform: [
		{translateX: 7.5},
		{translateY: 16.5},
	],
	},
_layer_6358b1: {
	position: "absolute",
	},
_layer_427886: {
	},
_Group_5: {
	width: 2,
	height: 1.98749,
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 10},
	],
	left: 35,
	},
_layer_2b8c28: {
	position: "absolute",
	},
_layer_ba4c17: {
	},
_Group_6: {
	width: 2,
	height: 1.98749,
	position: "absolute",
	transform: [
		{translateX: 14.5},
		{translateY: 16.5125},
	],
	},
_layer_17118e: {
	position: "absolute",
	},
_layer_18090e: {
	},
_Calendar_2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(32, 38, 48)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_46: {
	width: 93.75,
	height: 56,
	flexShrink: 0,
	},
_Rectangle_27_2: {
	width: 93.75,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_46_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 30.25,
	top: 10,
	},
_vuesax_twotone_briefcase: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 2,
	},
_vuesax_twotone_briefcase_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_briefcase: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_d6e119: {
	position: "absolute",
	transform: [
		{translateX: 2.24921},
		{translateY: 6},
	],
	},
_layer_98cf26: {
	},
_layer_cd1d66: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	},
_layer_0401d2: {
	},
_Group_638: {
	width: 19.0309,
	height: 5,
	position: "absolute",
	left: 2.61914,
	top: 11,
	},
_layer_02f155: {
	position: "absolute",
	transform: [
		{translateX: 7.38086},
		{translateY: 1},
	],
	},
_layer_5160fe: {
	},
_layer_42584a: {
	position: "absolute",
	transform: [
		{translateX: 11.3809},
	],
	},
_layer_ca2407: {
	},
_layer_81056a: {
	position: "absolute",
	transform: [
		{translateY: 0.269531},
	],
	},
_layer_c65bb6: {
	},
_layer_c88b40: {
	position: "absolute",
	},
_Project: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_47: {
	width: 93.75,
	height: 56,
	flexShrink: 0,
	},
_Rectangle_27_3: {
	width: 93.75,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_46_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 34.5,
	top: 10,
	},
_vuesax_twotone_stickynote: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 2,
	},
_vuesax_twotone_stickynote_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_stickynote: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_0fcfa0: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	},
_layer_e5250e: {
	},
_layer_b1297d: {
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 2},
	],
	},
_layer_bb8f3e: {
	},
_layer_e447d3: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 11},
	],
	},
_layer_e95392: {
	},
_layer_e87f85: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 15},
	],
	},
_layer_0f35bb: {
	},
_layer_afba5e: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3.5},
	],
	},
_layer_e5e4c6: {
	},
_layer_2dfc1e: {
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	},
_layer_70063b: {
	},
_layer_049638: {
	position: "absolute",
	},
_Task: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_48: {
	width: 93.75,
	height: 56,
	flexShrink: 0,
	},
_Rectangle_27_4: {
	width: 93.75,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_46_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 25.75,
	top: 10,
	},
_vuesax_twotone_setting_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 2,
	},
_vuesax_twotone_setting_2_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_setting_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_008650: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
_layer_84e44d: {
	},
_layer_91aa01: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2.5611},
	],
	},
_layer_4c65c6: {
	},
_layer_ad51c4: {
	position: "absolute",
	},
_Settings: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
})

