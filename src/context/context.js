import { createContext, useContext, useState } from "react";
import uniqid from "uniqid";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [showSideBar, setShowSideBar] = useState(false);
    const [search, setSearch] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cardIdx, setCardIdx] = useState("");

    const handelShowBar = () => {
        setShowSideBar((prev) => !prev)
    }

    const menuItems = [
        {
            id: uniqid(),
            title: "Demos",
            children: [
                {
                    id: uniqid(),
                    title: 'Demos Header',
                    name: 'Demos',
                    to: '/demos'
                },
                {
                    id: uniqid(),
                    title: 'Demos Layout',
                    name: 'Demos',
                    to: '/demos'
                },
                {
                    id: uniqid(),
                    title: 'Demos Buttons',
                    name: 'Demos',
                    to: '/demos'
                },
                {
                    id: uniqid(),
                    title: 'Gallery Demos',
                    name: 'Demos',
                    to: '/gallery'
                },
                {
                    id: uniqid(),
                    title: 'Gallery Demos',
                    name: 'Demos',
                    to: '/demos'
                },
            ]
        }, {
            id: uniqid(),
            title: "Post",
            children: [
                {
                    id: uniqid(),
                    title: 'Post Header',
                    name: 'Post',
                    to: '/postheader'
                },
                {
                    id: uniqid(),
                    title: 'Post Layout',
                    name: 'Post',
                    to: '/postlayout'
                },
                {
                    id: uniqid(),
                    title: 'Share Buttons',
                    name: 'Post',
                    to: '/sharebuttons'
                },
                {
                    id: uniqid(),
                    title: 'Gallery Post',
                    name: 'Post',
                    to: '/gallery post'
                },
                {
                    id: uniqid(),
                    title: 'Video Post',
                    name: 'Post',
                    to: '/videopost'
                }
            ]
        }, {
            id: uniqid(),
            title: "Features",
            children: [],
        }, {
            id: uniqid(),
            title: "Categories",
            children: [],
        }, {
            id: uniqid(),
            title: "Shop",
            children: [],
        }, {
            id: uniqid(),
            title: "Buy Now",
            children: [],
        }
    ]

    return <AppContext.Provider value={{
        menuItems,
        data,
        showSideBar,
        search,
        isOpenModal,
        cardIdx,
        setData,
        setShowSideBar,
        handelShowBar,
        setSearch,
        setIsOpenModal,
        setCardIdx
    }} >
        {children}
    </ AppContext.Provider >
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }