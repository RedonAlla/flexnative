import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FDFDFE",
					borderRadius: 32,
				}}>
				<View 
					style={{
						backgroundColor: "#FDFDFD",
						paddingTop: 18,
						paddingBottom: 52,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 39,
							marginHorizontal: 33,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 4,
								flex: 1,
							}}>
							{"4:21"}
						</Text>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 18,
								height: 11,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 11,
								marginRight: 6,
							}}
						/>
						<View 
							style={{
								width: 23,
								borderColor: "#000000",
								borderRadius: 2,
								borderWidth: 1,
								paddingHorizontal: 2,
								marginRight: 1,
							}}>
							<View 
								style={{
									height: 7,
									backgroundColor: "#000000",
									borderRadius: 1,
									marginTop: 2,
								}}>
							</View>
						</View>
						<View 
							style={{
								width: 1,
								height: 4,
								backgroundColor: "#000000",
							}}>
						</View>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 160,
							height: 146,
							marginBottom: 47,
							marginLeft: 144,
						}}
					/>
					<Text 
						style={{
							color: "#000000",
							fontSize: 32,
							textAlign: "center",
							marginBottom: 57,
						}}>
						{"Welcome back!"}
					</Text>
					<TextInput
						placeholder={"Email"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#000000",
							fontSize: 21,
							marginBottom: 21,
							marginHorizontal: 21,
							backgroundColor: "#FFFFFF",
							borderColor: "#000000",
							borderRadius: 10,
							borderWidth: 1,
							paddingVertical: 23,
							paddingHorizontal: 21,
						}}
					/>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#000000",
							borderRadius: 10,
							borderWidth: 1,
							paddingHorizontal: 24,
							marginBottom: 20,
							marginHorizontal: 21,
						}}>
						<TextInput
							placeholder={"Password"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={{
								color: "#000000",
								fontSize: 21,
								marginRight: 4,
								flex: 1,
								paddingVertical: 24,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 26,
								height: 17,
							}}
						/>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 17,
							marginBottom: 52,
							marginLeft: 23,
						}}>
						{"Forgot password?"}
					</Text>
					<TouchableOpacity 
						style={{
							alignItems: "center",
							backgroundColor: "#0098FF",
							borderRadius: 10,
							paddingVertical: 26,
							marginBottom: 55,
							marginHorizontal: 21,
							shadowColor: "#FFFFFF26",
							shadowOpacity: 0.2,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 26,
							}}>
							{"Login"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							paddingHorizontal: 187,
							marginBottom: 53,
							marginHorizontal: 21,
						}}>
						<View >
							<View >
								<View 
									style={{
										height: 25,
										backgroundColor: "#FFFFFF",
									}}>
								</View>
								<Text 
									style={{
										position: "absolute",
										bottom: -5,
										left: 12,
										color: "#000000",
										fontSize: 21,
									}}>
									{"or"}
								</Text>
							</View>
							<View 
								style={{
									position: "absolute",
									bottom: 11,
									left: -187,
									width: 417,
									height: 1,
									backgroundColor: "#000000",
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 58,
							marginHorizontal: 104,
						}}>
						<View 
							style={{
								width: 64,
								backgroundColor: "#FFFFFF",
								borderColor: "#000000",
								borderRadius: 10,
								borderWidth: 1,
								paddingHorizontal: 16,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 10,
									height: 32,
									marginTop: 16,
								}}
							/>
						</View>
						<View 
							style={{
								width: 65,
								backgroundColor: "#FFFFFF",
								borderColor: "#000000",
								borderRadius: 10,
								borderWidth: 1,
								paddingHorizontal: 16,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 32,
									marginTop: 16,
								}}
							/>
						</View>
						<View 
							style={{
								width: 65,
								backgroundColor: "#FFFFFF",
								borderColor: "#000000",
								borderRadius: 10,
								borderWidth: 1,
								paddingVertical: 17,
								paddingRight: 18,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 7,
									marginLeft: 33,
								}}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 23,
									marginLeft: 21,
								}}
							/>
						</View>
					</View>
					<Text 
						style={{
							fontSize: 19,
							textAlign: "center",
						}}>
						{"Don't have an account? Sign up"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}