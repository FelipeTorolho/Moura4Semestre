import { Text, View } from "react-native"
import{ FooterStyles } from "./FooterStyle"

export const Footer = () => {
  return (
    <View style={FooterStyles.footerContainer}>
        <Text style={FooterStyles.text}>2026, React List - Todos os direitos reservados</Text>
    </View>
  )
}