import React from "react"
import { Text, View } from "react-native"
import MapView, { Polyline, Marker, Region } from "react-native-maps"
import { ComponentButton, ComponentInput } from "../../components"
import { styles } from "./styles"

export function ShowLocation(){
    return(
        <MapView
            showsUserLocation={true}
            style={styles.map}
        >

        </MapView>
    )
}