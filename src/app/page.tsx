import Homepage from "@/components/homePage/homePage"
import Introduction from "@/components/introduction/introduction"
import { introColection as intro} from "@/utils/introductionCollection"
export default function Hello() {
  return (
    <div>
    <Homepage/>
    <Introduction introTitle={intro[0].introTitle} introDetails={intro[0].introDetails} introBtn={intro[0].introBtn}/>
    </div>
  )
}
