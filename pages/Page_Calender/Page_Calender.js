import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,onPress,Dimensions, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import {image_Ellipse_1_link} from './assets/imageLinks.js'
import {image_Ellipse_2_link} from './assets/imageLinks.js'
import {image_Ellipse_3_link} from './assets/imageLinks.js'
import {image_Ellipse_4_link} from './assets/imageLinks.js'
const Page_Calender  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Create_New_Event}    >
				<View style = {noneModeStyles._Bg}    >
				</View>
				<View style = {noneModeStyles._Rectangle_5}    >
				</View>
				<View style = {noneModeStyles._Rectangle_14}    >
				</View>
				<View style = {noneModeStyles._Frame_2}    >
				<TouchableOpacity onPress={()=>navigation.navigate('Page_Schedule')}>
				<Text style = {noneModeStyles._Save_event}   >
						Save event
					</Text>
				</TouchableOpacity>	
					
				</View>
				<View style = {noneModeStyles._Group_27}    >
					<Text style = {noneModeStyles._Create_New_Event_2}   >
						Create New Event
					</Text>
					<View style = {noneModeStyles._vuesax_bulk_close_circle}    >
						<View style = {noneModeStyles._vuesax_bulk_close_circle_2}    >
							<View style = {noneModeStyles._close_circle}    >
								<View style = {noneModeStyles.style12}    >
									<View style = {noneModeStyles.style13}   >
										<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
											<Path fill = {"#E1E6F1"}     d = "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style14}    >
									<View style = {noneModeStyles.style15}   >
										<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
											<Path fill = {"#A8B4CB"}     d = "M5.18337 3.9986L7.7541 1.42787C8.07824 1.10374 8.07824 0.567237 7.7541 0.243102C7.42997 -0.0810339 6.89347 -0.0810339 6.56933 0.243102L3.9986 2.81383L1.42787 0.243102C1.10374 -0.0810339 0.567237 -0.0810339 0.243102 0.243102C-0.0810339 0.567237 -0.0810339 1.10374 0.243102 1.42787L2.81383 3.9986L0.243102 6.56933C-0.0810339 6.89347 -0.0810339 7.42997 0.243102 7.7541C0.410758 7.92176 0.623122 8 0.835487 8C1.04785 8 1.26022 7.92176 1.42787 7.7541L3.9986 5.18337L6.56933 7.7541C6.73699 7.92176 6.94935 8 7.16172 8C7.37408 8 7.58645 7.92176 7.7541 7.7541C8.07824 7.42997 8.07824 6.89347 7.7541 6.56933L5.18337 3.9986Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style16}    >
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_27}    >
						<View style = {noneModeStyles._Input_Text}    >
							<View style = {noneModeStyles._Form}    >
								<View style = {noneModeStyles._Rectangle_6}    >
								</View>
								<Text style = {noneModeStyles._Discussion_Project_POS_Man}   >
									Discussion Project POS-Man
								</Text>
							</View>
							<Text style = {noneModeStyles._Label}   >
								Title
							</Text>
						</View>
						<View style = {noneModeStyles._Category}    >
							<Text style = {noneModeStyles._Category_2}   >
								Category
							</Text>
							<View style = {noneModeStyles._Group_11}    >
								<View style = {noneModeStyles._Frame_26}    >
									<View style = {noneModeStyles._Frame_6}    >
										<View style = {noneModeStyles._Frame_4}    >
											<Text style = {noneModeStyles._Works}   >
												Works
											</Text>
											<View style = {noneModeStyles._vuesax_bold_close_circle}    >
												<View style = {noneModeStyles._vuesax_bold_close_circle_2}    >
													<View style = {noneModeStyles._close_circle_2}    >
														<View style = {noneModeStyles.style33}    >
															<View style = {noneModeStyles.style34}   >
																<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
																	<Path fill = {"#1665FA"}     d = "M6.99999 0C3.143 0 0 3.143 0 6.99999C0 10.857 3.143 14 6.99999 14C10.857 14 14 10.857 14 6.99999C14 3.143 10.857 0 6.99999 0ZM9.35199 8.60999C9.55499 8.81299 9.55499 9.14899 9.35199 9.35199C9.24699 9.45699 9.11399 9.50599 8.98099 9.50599C8.84799 9.50599 8.71499 9.45699 8.60999 9.35199L6.99999 7.74199L5.39 9.35199C5.285 9.45699 5.152 9.50599 5.019 9.50599C4.886 9.50599 4.753 9.45699 4.648 9.35199C4.445 9.14899 4.445 8.81299 4.648 8.60999L6.258 6.99999L4.648 5.39C4.445 5.187 4.445 4.851 4.648 4.648C4.851 4.445 5.187 4.445 5.39 4.648L6.99999 6.258L8.60999 4.648C8.81299 4.445 9.14899 4.445 9.35199 4.648C9.55499 4.851 9.55499 5.187 9.35199 5.39L7.74199 6.99999L9.35199 8.60999Z"/>
																</Svg>
															</View>
														</View>
														<View style = {noneModeStyles.style35}    >
														</View>
													</View>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._Frame_5}    >
											<Text style = {noneModeStyles._Meeting}   >
												Meeting
											</Text>
										</View>
										<View style = {noneModeStyles._Frame_6_2}    >
											<Text style = {noneModeStyles._Hangout}   >
												Hangout
											</Text>
										</View>
									</View>
									<View style = {noneModeStyles._Frame_7}    >
										<View style = {noneModeStyles._Frame_5_2}    >
											<Text style = {noneModeStyles._Workout}   >
												Workout
											</Text>
										</View>
										<View style = {noneModeStyles._Frame_6_3}    >
											<View style = {noneModeStyles._vuesax_linear_add}    >
												<View style = {noneModeStyles._vuesax_linear_add_2}    >
													<View style = {noneModeStyles._add}    >
														<View style = {noneModeStyles.style47}    >
															<View style = {noneModeStyles.style48}   >
																<Svg style={{height: 2, width: 10}} viewBox = "0 0 10 2">
																	<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {2} d = "M1 1H9"/>
																</Svg>
															</View>
														</View>
														<View style = {noneModeStyles.style49}    >
															<View style = {noneModeStyles.style50}   >
																<Svg style={{height: 10, width: 2}} viewBox = "0 0 2 10">
																	<Path fill = {"none"}   stroke = {"#7386AA"} strokeWidth = {2} d = "M1 9V1"/>
																</Svg>
															</View>
														</View>
														<View style = {noneModeStyles.style51}    >
														</View>
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Date___ttime}    >
							<View style = {noneModeStyles._Group_32}    >
								<Text style = {noneModeStyles._Date___time}   >
									Date & time
								</Text>
								<View style = {noneModeStyles._Frame_29}    >
									<Text style = {noneModeStyles._Repeat}   >
										Repeat
									</Text>
									<View style = {noneModeStyles._Forms_Support_Switches_02__Disabled_On}    >
										<View style = {noneModeStyles._Handle}    >
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_14}    >
								<View style = {noneModeStyles._Rectangle_7}    >
								</View>
								<View style = {noneModeStyles._Group_28}    >
									<Text style = {noneModeStyles._17_09_2021}   >
										17/09/2021
									</Text>
									<View style = {noneModeStyles._vuesax_linear_calendar}    >
										<View style = {noneModeStyles._vuesax_linear_calendar_2}    >
											<View style = {noneModeStyles._calendar}    >
												<View style = {noneModeStyles.style66}    >
													<View style = {noneModeStyles.style67}   >
														<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.75 0.75V3.25"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style68}    >
													<View style = {noneModeStyles.style69}   >
														<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.75 0.75V3.25"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style70}    >
													<View style = {noneModeStyles.style71}   >
														<Svg style={{height: 2, width: 16}} viewBox = "0 0 16 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.765957 0.765957H15.234"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style72}    >
													<View style = {noneModeStyles.style73}   >
														<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M15.8276 4.94089V12.0591C15.8276 14.5714 14.5714 16.2463 11.6404 16.2463H4.94089C2.00985 16.2463 0.753694 14.5714 0.753694 12.0591V4.94089C0.753694 2.42857 2.00985 0.753694 4.94089 0.753694H11.6404C14.5714 0.753694 15.8276 2.42857 15.8276 4.94089Z"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style74}    >
												</View>
												<View style = {noneModeStyles.style75}    >
													<View style = {noneModeStyles.style76}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999994 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style77}    >
													<View style = {noneModeStyles.style78}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999994 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style79}    >
													<View style = {noneModeStyles.style80}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style81}    >
													<View style = {noneModeStyles.style82}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style83}    >
													<View style = {noneModeStyles.style84}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style85}    >
													<View style = {noneModeStyles.style86}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 0.999995H1.00748"/>
														</Svg>
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_8}    >
								</View>
								<View style = {noneModeStyles._Group_29}    >
									<Text style = {noneModeStyles._10_00}   >
										10:00
									</Text>
									<View style = {noneModeStyles._vuesax_linear_arrow_down}    >
										<View style = {noneModeStyles._vuesax_linear_arrow_down_2}    >
											<View style = {noneModeStyles._arrow_down}    >
												<View style = {noneModeStyles.style93}    >
													<View style = {noneModeStyles.style94}   >
														<Svg style={{height: 8, width: 15}} viewBox = "0 0 15 8">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M14.2347 0.765306L8.69048 6.30952C8.03571 6.96429 6.96429 6.96429 6.30952 6.30952L0.765306 0.765306"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style95}    >
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_16}    >
								<View style = {noneModeStyles._Rectangle_7_2}    >
								</View>
								<View style = {noneModeStyles._Group_31}    >
									<Text style = {noneModeStyles._17_09_2021_2}   >
										17/09/2021
									</Text>
									<View style = {noneModeStyles._vuesax_linear_calendar_3}    >
										<View style = {noneModeStyles._vuesax_linear_calendar_4}    >
											<View style = {noneModeStyles._calendar_2}    >
												<View style = {noneModeStyles.style103}    >
													<View style = {noneModeStyles.style104}   >
														<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.75 0.75V3.25"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style105}    >
													<View style = {noneModeStyles.style106}   >
														<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.75 0.75V3.25"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style107}    >
													<View style = {noneModeStyles.style108}   >
														<Svg style={{height: 2, width: 16}} viewBox = "0 0 16 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M0.765957 0.765957H15.234"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style109}    >
													<View style = {noneModeStyles.style110}   >
														<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M15.8276 4.94089V12.0591C15.8276 14.5714 14.5714 16.2463 11.6404 16.2463H4.94089C2.00985 16.2463 0.753695 14.5714 0.753695 12.0591V4.94089C0.753695 2.42857 2.00985 0.753695 4.94089 0.753695H11.6404C14.5714 0.753695 15.8276 2.42857 15.8276 4.94089Z"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style111}    >
												</View>
												<View style = {noneModeStyles.style112}    >
													<View style = {noneModeStyles.style113}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999994 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style114}    >
													<View style = {noneModeStyles.style115}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999994 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style116}    >
													<View style = {noneModeStyles.style117}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style118}    >
													<View style = {noneModeStyles.style119}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style120}    >
													<View style = {noneModeStyles.style121}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style122}    >
													<View style = {noneModeStyles.style123}   >
														<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {2} d = "M0.999995 1.00001H1.00748"/>
														</Svg>
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_8_2}    >
								</View>
								<View style = {noneModeStyles._Group_30}    >
									<Text style = {noneModeStyles._10_00_2}   >
										10:00
									</Text>
									<View style = {noneModeStyles._vuesax_linear_arrow_down_3}    >
										<View style = {noneModeStyles._vuesax_linear_arrow_down_4}    >
											<View style = {noneModeStyles._arrow_down_2}    >
												<View style = {noneModeStyles.style130}    >
													<View style = {noneModeStyles.style131}   >
														<Svg style={{height: 8, width: 15}} viewBox = "0 0 15 8">
															<Path fill = {"none"}   stroke = {"#6C7C9B"} strokeWidth = {1.5} d = "M14.2347 0.765306L8.69048 6.30952C8.03571 6.96429 6.96429 6.96429 6.30952 6.30952L0.765306 0.765306"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style132}    >
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Location}    >
							<View style = {noneModeStyles._Rectangle_9}    >
							</View>
							<View style = {noneModeStyles._Frame_28}    >
								<Text style = {noneModeStyles._Location_2}   >
									Location
								</Text>
								<Text style = {noneModeStyles.__optional_}   >
									(optional)
								</Text>
							</View>
						</View>
						<View style = {noneModeStyles._Group_8}    >
							<Text style = {noneModeStyles._Add_Guest}   >
								Add Guest
							</Text>
							<View style = {noneModeStyles._Frame_7_2}    >
								<View style = {noneModeStyles._Group_26}    >
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
									<View style = {noneModeStyles._Ellipse_4_container}    >
										<View style = {noneModeStyles._Ellipse_4}   >
											<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_4_link}}/>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Group_6}    >
									<View style = {noneModeStyles._Ellipse_2_2}    >
									</View>
									<View style = {noneModeStyles._vuesax_outline_add}    >
										<View style = {noneModeStyles._vuesax_outline_add_2}    >
											<View style = {noneModeStyles._add_2}    >
												<View style = {noneModeStyles.style155}    >
													<View style = {noneModeStyles.style156}   >
														<Svg style={{height: 2, width: 17}} viewBox = "0 0 17 2">
															<Path fill = {"#7386AA"}     d = "M16.0556 1.88889H0.944444C0.428148 1.88889 0 1.46074 0 0.944444C0 0.428148 0.428148 0 0.944444 0H16.0556C16.5719 0 17 0.428148 17 0.944444C17 1.46074 16.5719 1.88889 16.0556 1.88889Z"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style157}    >
													<View style = {noneModeStyles.style158}   >
														<Svg style={{height: 17, width: 2}} viewBox = "0 0 2 17">
															<Path fill = {"#7386AA"}     d = "M0.944444 17C0.428148 17 0 16.5719 0 16.0556V0.944444C0 0.428148 0.428148 0 0.944444 0C1.46074 0 1.88889 0.428148 1.88889 0.944444V16.0556C1.88889 16.5719 1.46074 17 0.944444 17Z"/>
														</Svg>
													</View>
												</View>
												<View style = {noneModeStyles.style159}    >
												</View>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_25}    >
						<View style = {noneModeStyles._Ellipse_7}    >
						</View>
						<View style = {noneModeStyles._vuesax_linear_calendar_edit}    >
							<View style = {noneModeStyles._vuesax_linear_calendar_edit_2}    >
								<View style = {noneModeStyles._calendar_edit}    >
									<View style = {noneModeStyles.style165}    >
										<View style = {noneModeStyles.style166}   >
											<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
												<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M0.8 0.8V3.2"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles.style167}    >
										<View style = {noneModeStyles.style168}   >
											<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
												<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M0.8 0.8V3.2"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles.style169}    >
										<View style = {noneModeStyles.style170}   >
											<Svg style={{height: 2, width: 15}} viewBox = "0 0 15 2">
												<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M0.789474 0.789474H14.2105"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._Group}    >
										<View style = {noneModeStyles.style172}    >
											<View style = {noneModeStyles.style173}   >
												<Svg style={{height: 7, width: 7}} viewBox = "0 0 7 7">
													<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M3.99815 1.24829L1.18932 4.05714C1.07824 4.16823 0.975073 4.37452 0.951269 4.52528L0.80051 5.59645C0.744968 5.98525 1.01475 6.25503 1.40355 6.19949L2.47472 6.04873C2.62548 6.02493 2.83971 5.92176 2.94286 5.81068L5.75171 3.00185C6.23572 2.51785 6.46582 1.95449 5.75171 1.24038C5.04553 0.534199 4.48216 0.764285 3.99815 1.24829Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles.style174}    >
											<View style = {noneModeStyles.style175}   >
												<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
													<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M0.947984 0.947994C1.23231 1.97157 2.02842 2.76768 3.052 3.05201"/>
												</Svg>
											</View>
										</View>
									</View>
									<View style = {noneModeStyles.style176}    >
										<View style = {noneModeStyles.style177}   >
											<Svg style={{height: 16, width: 15}} viewBox = "0 0 15 16">
												<Path fill = {"none"}   stroke = {"#1665FA"} strokeWidth = {1.5} d = "M7.5 14.625H4.5C1.875 14.625 0.75 13.125 0.75 10.875V4.5C0.75 2.25 1.875 0.75 4.5 0.75H10.5C13.125 0.75 14.25 2.25 14.25 4.5V7.125"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles.style178}    >
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Calender

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(255, 255, 255, 0.4)",
	},
_Create_New_Event: {
	width: 375,
	height: 812,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 16,
	borderRadius: 40,
	},
_Bg: {
	width: 375,
	height: 812,
	backgroundColor: "rgba(255, 255, 255, 0.3)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_5: {
	width: 327,
	height: 724,
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: 24,
	top: 56,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_14: {
	width: 375,
	height: 741,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 71,
	borderRadius: 30,
	},
_Frame_2: {
	width: 327,
	height: "auto",
	backgroundColor: "rgb(22, 101, 250)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 24,
	top: 740,
	paddingTop: 15,
	paddingRight: 24,
	paddingBottom: 15,
	paddingLeft: 24,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(22, 101, 250)",
	borderRadius: 12,
	},
_Save_event: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_27: {
	width: 327,
	height: 614,
	position: "absolute",
	left: 24,
	top: 96,
	},
_Create_New_Event_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 40,
	color: "rgb(32, 38, 48)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_bulk_close_circle: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 303,
	top: 0,
	},
_vuesax_bulk_close_circle_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_close_circle: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style13: {
	},
style14: {
	position: "absolute",
	transform: [
		{translateX: 8.4225},
		{translateY: 8.4225},
	],
	},
style15: {
	},
style16: {
	position: "absolute",
	},
_Frame_27: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 101,
	},
_Input_Text: {
	width: 327,
	height: 69,
	flexShrink: 0,
	marginBottom: 24,
	},
_Form: {
	width: 327,
	height: 44,
	position: "absolute",
	left: 0,
	top: 25,
	},
_Rectangle_6: {
	width: 327,
	height: 44,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 233, 243)",
	borderRadius: 8,
	},
_Discussion_Project_POS_Man: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(62, 72, 91)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Label: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Category: {
	width: 265,
	height: 97,
	flexShrink: 0,
	marginBottom: 24,
	},
_Category_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_11: {
	width: 265,
	height: 72,
	position: "absolute",
	left: 0,
	top: 25,
	},
_Frame_26: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_6: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 8,
	},
_Frame_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(226, 236, 253)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 12,
	paddingTop: 8,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(226, 236, 253)",
	borderRadius: 16,
	},
_Works: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(22, 101, 250)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_bold_close_circle: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	},
_vuesax_bold_close_circle_2: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 0,
	top: 0,
	},
_close_circle_2: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 0,
	top: 0,
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 1.33334},
		{translateY: 1.33334},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	},
_Frame_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(247, 249, 252)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 12,
	paddingTop: 8,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(247, 249, 252)",
	borderRadius: 16,
	},
_Meeting: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(168, 180, 203)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_6_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(247, 249, 252)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(247, 249, 252)",
	borderRadius: 16,
	},
_Hangout: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(168, 180, 203)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_7: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	},
_Frame_5_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(247, 249, 252)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginRight: 12,
	paddingTop: 8,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(247, 249, 252)",
	borderRadius: 16,
	},
_Workout: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(168, 180, 203)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_6_3: {
	width: 32,
	height: "auto",
	backgroundColor: "rgb(247, 249, 252)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 8,
	paddingLeft: 16,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(247, 249, 252)",
	borderRadius: 32,
	},
_vuesax_linear_add: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(21, 103, 239, 0)",
	flexShrink: 0,
	},
_vuesax_linear_add_2: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 0,
	top: 0,
	},
_add: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 0,
	top: 0,
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 8},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 4},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	},
_Date___ttime: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 24,
	},
_Group_32: {
	width: 327,
	height: 17,
	flexShrink: 0,
	marginBottom: 8,
	},
_Date___time: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_29: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	position: "absolute",
	left: 243,
	top: 0,
	},
_Repeat: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(156, 169, 195)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "right",
	},
_Forms_Support_Switches_02__Disabled_On: {
	width: 28,
	height: "auto",
	backgroundColor: "rgb(225, 230, 241)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	justifyContent: "flex-end",
	flexShrink: 0,
	paddingTop: 2,
	paddingRight: 2,
	paddingBottom: 2,
	paddingLeft: 2,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(225, 230, 241)",
	borderRadius: 8,
	},
_Handle: {
	width: 12,
	height: 12,
	flexShrink: 0,
	},
_Group_14: {
	width: 327,
	height: 44,
	flexShrink: 0,
	marginBottom: 8,
	},
_Rectangle_7: {
	width: 155.5,
	height: 44,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 233, 243)",
	borderRadius: 8,
	},
_Group_28: {
	width: 131,
	height: 20,
	position: "absolute",
	left: 12,
	top: 12,
	},
_17_09_2021: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 2,
	color: "rgb(62, 72, 91)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_linear_calendar: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 111,
	top: 0,
	},
_vuesax_linear_calendar_2: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
_calendar: {
	width: 20,
	height: 20,
	position: "absolute",
	},
style66: {
	position: "absolute",
	transform: [
		{translateX: 6.66667},
		{translateY: 1.66667},
	],
	},
style67: {
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 13.3333},
		{translateY: 1.66667},
	],
	},
style69: {
	},
style70: {
	position: "absolute",
	transform: [
		{translateX: 2.91667},
		{translateY: 7.575},
	],
	},
style71: {
	},
style72: {
	position: "absolute",
	transform: [
		{translateX: 2.5},
		{translateY: 2.91667},
	],
	},
style73: {
	},
style74: {
	position: "absolute",
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 12.6668},
		{translateY: 11},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	transform: [
		{translateX: 12.6668},
		{translateY: 13.5},
	],
	},
style78: {
	},
style79: {
	position: "absolute",
	transform: [
		{translateX: 9.58415},
		{translateY: 11},
	],
	},
style80: {
	},
style81: {
	position: "absolute",
	transform: [
		{translateX: 9.58415},
		{translateY: 13.5},
	],
	},
style82: {
	},
style83: {
	position: "absolute",
	transform: [
		{translateX: 6.49983},
		{translateY: 11},
	],
	},
style84: {
	},
style85: {
	position: "absolute",
	transform: [
		{translateX: 6.49983},
		{translateY: 13.5},
	],
	},
style86: {
	},
_Rectangle_8: {
	width: 155.5,
	height: 44,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 171.5,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 233, 243)",
	borderRadius: 8,
	},
_Group_29: {
	width: 131,
	height: 20,
	position: "absolute",
	left: 184,
	top: 12,
	},
_10_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 1,
	color: "rgb(62, 72, 91)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_linear_arrow_down: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 111,
	top: 0,
	},
_vuesax_linear_arrow_down_2: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
_arrow_down: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
style93: {
	position: "absolute",
	transform: [
		{translateX: 3.4},
		{translateY: 7.45833},
	],
	},
style94: {
	},
style95: {
	position: "absolute",
	},
_Group_16: {
	width: 327,
	height: 44,
	flexShrink: 0,
	},
_Rectangle_7_2: {
	width: 155.5,
	height: 44,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 233, 243)",
	borderRadius: 8,
	},
_Group_31: {
	width: 131,
	height: 20,
	position: "absolute",
	left: 12,
	top: 12,
	},
_17_09_2021_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 2,
	color: "rgb(62, 72, 91)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_linear_calendar_3: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 111,
	top: 0,
	},
_vuesax_linear_calendar_4: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
_calendar_2: {
	width: 20,
	height: 20,
	position: "absolute",
	},
style103: {
	position: "absolute",
	transform: [
		{translateX: 6.66667},
		{translateY: 1.66666},
	],
	},
style104: {
	},
style105: {
	position: "absolute",
	transform: [
		{translateX: 13.3333},
		{translateY: 1.66666},
	],
	},
style106: {
	},
style107: {
	position: "absolute",
	transform: [
		{translateX: 2.91667},
		{translateY: 7.57501},
	],
	},
style108: {
	},
style109: {
	position: "absolute",
	transform: [
		{translateX: 2.5},
		{translateY: 2.91666},
	],
	},
style110: {
	},
style111: {
	position: "absolute",
	},
style112: {
	position: "absolute",
	transform: [
		{translateX: 12.6668},
		{translateY: 11},
	],
	},
style113: {
	},
style114: {
	position: "absolute",
	transform: [
		{translateX: 12.6668},
		{translateY: 13.5},
	],
	},
style115: {
	},
style116: {
	position: "absolute",
	transform: [
		{translateX: 9.58415},
		{translateY: 11},
	],
	},
style117: {
	},
style118: {
	position: "absolute",
	transform: [
		{translateX: 9.58415},
		{translateY: 13.5},
	],
	},
style119: {
	},
style120: {
	position: "absolute",
	transform: [
		{translateX: 6.49983},
		{translateY: 11},
	],
	},
style121: {
	},
style122: {
	position: "absolute",
	transform: [
		{translateX: 6.49983},
		{translateY: 13.5},
	],
	},
style123: {
	},
_Rectangle_8_2: {
	width: 155.5,
	height: 44,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 171.5,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 233, 243)",
	borderRadius: 8,
	},
_Group_30: {
	width: 131,
	height: 20,
	position: "absolute",
	left: 184,
	top: 12,
	},
_10_00_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 1,
	color: "rgb(62, 72, 91)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_vuesax_linear_arrow_down_3: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 111,
	top: 0,
	},
_vuesax_linear_arrow_down_4: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
_arrow_down_2: {
	width: 20,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
style130: {
	position: "absolute",
	transform: [
		{translateX: 3.4},
		{translateY: 7.45834},
	],
	},
style131: {
	},
style132: {
	position: "absolute",
	},
_Location: {
	width: 327,
	height: 65,
	flexShrink: 0,
	marginBottom: 24,
	},
_Rectangle_9: {
	width: 327,
	height: 40,
	backgroundColor: "rgba(196, 196, 196, 0)",
	position: "absolute",
	left: 0,
	top: 25,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	borderRadius: 8,
	},
_Frame_28: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Location_2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 4,
	color: "rgb(115, 134, 170)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
__optional_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(156, 169, 195)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_8: {
	width: 163,
	height: 65,
	flexShrink: 0,
	},
_Add_Guest: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(115, 134, 170)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_7_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 0,
	top: 25,
	},
_Group_26: {
	width: 115,
	height: 40,
	flexShrink: 0,
	marginRight: 8,
	},
_Ellipse_1_container: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_1: {
	width: "100%",
	height: "100%",
	},
_Ellipse_2_container: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 25,
	top: 0,
	},
_Ellipse_2: {
	width: "100%",
	height: "100%",
	},
_Ellipse_3_container: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 50,
	top: 0,
	},
_Ellipse_3: {
	width: "100%",
	height: "100%",
	},
_Ellipse_4_container: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 75,
	top: 0,
	},
_Ellipse_4: {
	width: "100%",
	height: "100%",
	},
_Group_6: {
	width: 40,
	height: 40,
	flexShrink: 0,
	},
_Ellipse_2_2: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(237, 240, 247)",
	},
_vuesax_outline_add: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 5,
	top: 5,
	},
_vuesax_outline_add_2: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 0,
	top: 0,
	},
_add_2: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 0,
	top: 0,
	},
style155: {
	position: "absolute",
	transform: [
		{translateX: 6.5625},
		{translateY: 14.0625},
	],
	},
style156: {
	},
style157: {
	position: "absolute",
	transform: [
		{translateX: 14.0625},
		{translateY: 6.5625},
	],
	},
style158: {
	},
style159: {
	position: "absolute",
	},
_Group_25: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_7: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_vuesax_linear_calendar_edit: {
	width: 18,
	height: 18,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 7,
	top: 7,
	},
_vuesax_linear_calendar_edit_2: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 0,
	top: 0,
	},
_calendar_edit: {
	width: 18,
	height: 18,
	position: "absolute",
	},
style165: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 1.5},
	],
	},
style166: {
	},
style167: {
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 1.5},
	],
	},
style168: {
	},
style169: {
	position: "absolute",
	transform: [
		{translateX: 2.625},
		{translateY: 6.8175},
	],
	},
style170: {
	},
_Group: {
	width: 5.11539,
	height: 5.11662,
	position: "absolute",
	transform: [
		{translateX: 11.3781},
		{translateY: 11.3977},
	],
	},
style172: {
	position: "absolute",
	},
style173: {
	},
style174: {
	position: "absolute",
	transform: [
		{translateX: 2.64685},
		{translateY: 0.812256},
	],
	},
style175: {
	},
style176: {
	position: "absolute",
	transform: [
		{translateX: 2.25},
		{translateY: 2.625},
	],
	},
style177: {
	},
style178: {
	position: "absolute",
	},
})

