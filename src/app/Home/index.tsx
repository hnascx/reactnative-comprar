import { Button } from "@/components/Button"
import { Filter } from "@/components/Filter"
import { Input } from "@/components/Input"
import { Item } from "@/components/Item"
import { FilterStatus } from "@/types/FilterStatus"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Array.from({ length: 100 }).map((_, index) => (
            <Item
              key={index}
              data={{ status: FilterStatus.DONE, description: "Café" }}
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover")}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
