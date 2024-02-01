import { useAdminAuth } from "../customHooks"

const WithAdminAth=props=>useAdminAuth(props)&& props.children

export default WithAdminAth