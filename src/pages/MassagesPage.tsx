// import { Route, Routes } from "react-router-dom"
// import ChatPage from "./ChatPage"

import { Outlet } from "react-router-dom"

const MassagesPage = () => {
    return (
        <div>
            <div>MassagesPage</div>
            <hr />

            {/* <Routes>
                <Route path=":id" element={<ChatPage />}></Route>
            </Routes> */}

            <Outlet />

        </div>
    )
}

export default MassagesPage