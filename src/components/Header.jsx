import React from 'react'
import { FiGlobe } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className='bg-brand-color'>
      <div className='container mx-auto h-12 flex items-center justify-between'>
        <div className='flex gap-x-6 '>
          <div className='h-8'>
          <a href="/" className='hover:bg-secondary-brand-color'>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjAzODQgOS4yNDAxOUMyNi4wMzg0IDYuNDk5OTkgMjMuODAxMiA0LjcxMjg5IDIwLjUxODIgNC43MTI4OUMxNy40MDc0IDQuNzEyODkgMTQuMTUwOSA2Ljk1MDA3IDE0LjE1MDkgMTEuOTI3NUMxNC4xNTA5IDE1LjcyNjcgMTYuNDU0MiAxOC41MzMxIDIwLjQyNTYgMTguNTMzMUMyMi42NjI3IDE4LjUzMzEgMjUuMTI1IDE3LjI2MjMgMjUuNzQ3MSAxNi4zODg2QzI1Ljc0NzEgMTYuMzg4NiAyNS4zMjM1IDE0Ljc0NzEgMjQuMTU4NiAxNC43NDcxQzIzLjU0OTcgMTQuNzQ3MSAyMy4wOTk2IDE0Ljk4NTQgMjIuNTk2NSAxNS4xODM5QzIyLjA4MDMgMTUuMzk1NyAyMS40NTgxIDE1LjU5NDMgMjAuNjYzOCAxNS41OTQzQzE5LjU1MTkgMTUuNTk0MyAxNy42NDU2IDE1LjE1NzUgMTcuNjQ1NiAxMi43NjE0QzE3LjY0NTYgMTIuNzYxNCAxOC41NDU4IDEzLjAyNjIgMjAuNTg0NCAxMy4wMjYyQzI0Ljk3OTMgMTMuMDM5NCAyNi4wMzg0IDExLjE4NjEgMjYuMDM4NCA5LjI0MDE5Wk0yMC42NTA2IDcuNjc4MTRDMjIuMTU5NyA3LjY3ODE0IDIyLjg4NzggOC40OTg4OCAyMi44ODc4IDkuMjUzNDNDMjIuODg3OCAxMC4xNDA0IDIyLjA5MzUgMTAuNzA5NiAyMC42NTA2IDEwLjcwOTZDMTguNTQ1OCAxMC43MDk2IDE3Ljc1MTUgMTAuNDE4NCAxNy43NTE1IDEwLjQwNTFDMTcuNzM4MyA5LjE0NzUzIDE4Ljc0NDQgNy42NzgxNCAyMC42NTA2IDcuNjc4MTRaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik0zNC4yMDYgMTUuNjIwNkMzMi42OTY5IDE1LjYyMDYgMzEuOTE1OSAxNC4zNDk4IDMxLjc3MDMgMTMuNzkzOEMzMS42MjQ2IDEzLjI1MTEgMzEuNTMyIDEyLjQ3IDMxLjUzMiAxMS42NjI1TDMxLjU1ODUgNy41NTg4NUgzMi42NTcyQzMzLjU0NDEgNy41NTg4NSAzNC4yMTkyIDcuMjk0MSAzNC43MDkgNi43Nzc4M0MzNS4xODU2IDYuMjYxNTUgMzUuNDM3MSA1LjU1OTk1IDM1LjQzNzEgNC42OTk1SDMxLjU3MTdMMzEuNTQ1MiAyLjg4NTkzQzMxLjU0NTIgMi4zMDM0NyAzMS41NDUyIDEuODQwMTUgMzEuNTU4NSAxLjQ4MjczQzMxLjU3MTcgMS4xMjUzMiAzMS41ODQ5IDAuODQ3MzI1IDMxLjU5ODIgMC42MzU1MjFDMzEuNjExNCAwLjQxMDQ4IDMxLjYzNzkgMC4yMjUxNTEgMzEuNjUxMSAwLjA5Mjc3MzRDMzAuNDczIDAuMDkyNzczNCAyOS41ODYgMC4zNDQyOTIgMjguOTYzOSAwLjg0NzMyNkMyOC4zNDE3IDEuMzUwMzYgMjguMDM3MiAyLjE3MTEgMjguMDM3MiAzLjMzNjAyTDI4LjAxMDcgMTIuNDE3MUMyOC4wMTA3IDE2LjEzNjkgMjkuNzg0NiAxOC41NTk0IDMzLjE3MzUgMTguNTU5NEMzNC44NDE0IDE4LjU1OTQgMzYuMDU5MyAxNy42NTkyIDM2LjA1OTMgMTYuMjk1OEMzNi4wNTkzIDE1LjgxOTIgMzUuOTkzMSAxNS41Njc3IDM1Ljk1MzQgMTUuNDA4OEMzNS42NDg5IDE1LjQ4ODMgMzUuMTA2MiAxNS42MjA2IDM0LjIwNiAxNS42MjA2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNNDIuNjkxNyAxNS43OTIyQzQxLjkzNzIgMTUuNzkyMiA0MS40NjA2IDE1LjI0OTQgNDEuNDYwNiAxNC4zNDkzVjcuNzk2NThDNDEuNDYwNiA3LjIxNDEyIDQxLjQ2MDYgNi43NTA4IDQxLjQ3MzggNi4zOTMzOEM0MS40ODcxIDYuMDM1OTYgNDEuNTAwMyA1Ljc1Nzk3IDQxLjUxMzYgNS41NDYxN0M0MS41MjY4IDUuMzIxMTIgNDEuNTUzMyA1LjEzNTggNDEuNTY2NSA1LjAwMzQyQzQwLjM3NTEgNS4wMDM0MiAzOS40NzQ5IDUuMjU0OTMgMzguODUyOCA1Ljc1Nzk3QzM4LjIzMDYgNi4yNjEgMzcuOTI2MSA3LjA4MTc0IDM3LjkyNjEgOC4yNDY2NkwzNy44OTk3IDE0LjkxODVDMzcuODk5NyAxNy4zMDEzIDM5LjQzNTIgMTguNjI1IDQxLjM2NzkgMTguNTQ1NkM0Mi41ODU4IDE4LjQ5MjcgNDMuNjQ0OCAxNy45MjM0IDQzLjY0NDggMTYuNjM5NEM0My42NDQ4IDE2LjEwOTkgNDMuNTUyMiAxNS42NzMgNDMuNTUyMiAxNS42NzNDNDMuMjg3NCAxNS43MzkyIDQzLjA4ODggMTUuNzkyMiA0Mi42OTE3IDE1Ljc5MjJaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik01MS4zNjI1IDUuMDMwMjdDNTAuNjM0NCA1LjAzMDI3IDQ5Ljg5MzEgNS4xMDk3IDQ5LjE1MTggNS4yODE3OUM0OC40MTA1IDUuNDQwNjUgNDcuNzM1MyA1Ljc1ODM1IDQ3LjEzOTYgNi4yMjE2N0M0Ni41NDM5IDYuNjg0OTkgNDYuMDU0MSA3LjMyMDQgNDUuNjgzNSA4LjE0MTE0QzQ1LjMxMjggOC45NjE4OCA0NS4xMTQzIDEwLjAwNzcgNDUuMTE0MyAxMS4zMDVWMTUuMDUxMkM0NS4xMTQzIDE2LjIwMjkgNDUuMjU5OSAxNy4yNzUyIDQ1Ljk2MTUgMTcuODA0N0M0Ni43MTYgMTguMzg3MSA0Ny42MDMgMTguNDEzNiA0OC43ODExIDE4LjQxMzZDNDguNzY3OSAxOC4yOTQ1IDQ4Ljc0MTQgMTcuOTYzNSA0OC43MjgyIDE3LjczODVDNDguNzE0OSAxNy41MjY3IDQ4LjY4ODQgMTcuMjQ4NyA0OC42ODg0IDE2Ljg5MTNDNDguNjc1MiAxNi41MzM5IDQ4LjY3NTIgMTYuMDcwNSA0OC42NzUyIDE1LjQ4ODFWMTAuNjgyOEM0OC42NzUyIDkuNTQ0MzQgNDguODYwNSA4LjA4ODE5IDUwLjg1OTQgNy45MTYxQzUxLjk4NDYgNy44MjM0NCA1Mi45Nzc1IDcuMzg2NTkgNTIuOTc3NSA2LjE2ODcyQzUyLjk3NzUgNS44OTA3MyA1Mi45MTEzIDUuMzQ3OTggNTIuNzY1NyA1LjAzMDI3SDUxLjM2MjVaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik02LjI0ODIxIDQuNzEyODlDMi4xNDQ1MSA0LjcxMjg5IDAgNy41ODU0OCAwIDExLjA4MDJDMCAxNC4zMTAyIDEuOTcyNDIgMTcuMzQxNyA1LjU1OTg1IDE3LjM0MTdDNy40MTMxMyAxNy4zNDE3IDguNDk4NjIgMTYuNTQ3NCA4Ljc2MzM4IDE2LjMyMjRWMTcuOTM3NEM4Ljc2MzM4IDE5Ljc5MDcgOC4wMzUzIDIxLjAzNSA2LjE2ODc4IDIxLjAzNUM1LjI2ODYyIDIxLjAzNSA0LjU5MzQ5IDIwLjc4MzUgMy45ODQ1NiAyMC40OTIzQzMuNDI4NTcgMjAuMjI3NSAzLjAxODIgMTkuOTIzIDIuNDc1NDYgMTkuOTIzQzEuMDg1NDkgMTkuOTIzIDAuNzAxNiAyMS42NDM5IDAuNzAxNiAyMS42NTcyQzEuNzQ3MzggMjMuMDA3NCA0LjE0MzQxIDI0LjAwMDMgNi4xNTU1NCAyNC4wMDAzQzEwLjExMzYgMjQuMDAwMyAxMi4yOTc4IDIxLjY5NjkgMTIuMjk3OCAxNy4xMTY2QzEyLjI5NzggMTcuMTE2NiAxMi4yOTc4IDEyLjUwOTkgMTIuMjk3OCAxMS43NTU0QzEyLjI4NDYgNy41NzIyNCAxMC40MzEzIDQuNzEyODkgNi4yNDgyMSA0LjcxMjg5Wk02LjIzNDk3IDE0LjIzMDhDNC42OTkzOSAxNC4yMzA4IDMuNTIxMjQgMTMuMjY0NSAzLjUyMTI0IDExLjEzMzJDMy41MjEyNCA4Ljg1NjMgNC43MjU4NyA3LjY3ODE0IDYuMjM0OTcgNy42NzgxNEM3LjcxNzYgNy42NzgxNCA4LjgwMzA5IDguNTc4MzEgOC44MDMwOSAxMC45NjExQzguODAzMDkgMTMuMzk2OCA3LjYyNDkzIDE0LjIzMDggNi4yMzQ5NyAxNC4yMzA4WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMzguNzk5NyAzLjY5MzMzQzM5LjA3NzcgMy44MjU3MSAzOS4zNjg5IDMuOTA1MTMgMzkuNjg2NiAzLjkwNTEzQzQwLjQxNDcgMy45MDUxMyA0MC45ODM5IDMuNTYwOTUgNDEuNDA3NSAyLjg3MjU5QzQxLjU3OTYgMi41NTQ4OCA0MS42NzIzIDIuMjIzOTQgNDEuNjcyMyAxLjg2NjUyQzQxLjY3MjMgMS41MzU1OCA0MS41OTI5IDEuMjE3ODcgNDEuNDM0IDAuOTEzNDA2QzQxLjI3NTEgMC42MjIxNzYgNDEuMDM2OSAwLjM5NzEzNCA0MC43MTkyIDAuMjM4MjgyQzQwLjQ0MTIgMC4wNzk0Mjg4IDQwLjE2MzIgMCAzOS44NTg3IDBDMzkuNTI3OCAwIDM5LjE5NjggMC4wOTI2NjQ5IDM4Ljg3OTEgMC4yNzc5OTNDMzguNTYxNCAwLjQ2MzMyMSAzOC4zMjMxIDAuNzI4MDc1IDM4LjEzNzggMS4wNTkwMkMzNy45NjU3IDEuMzUwMjUgMzcuODczIDEuNjk0NDMgMzcuODczIDIuMDY1MDlDMzcuODczIDIuMzk2MDMgMzcuOTUyNSAyLjcxMzc0IDM4LjExMTMgMi45OTE3M0MzOC4yNzAyIDMuMjgyOTYgMzguNTA4NSAzLjUyMTI0IDM4Ljc5OTcgMy42OTMzM1oiIGZpbGw9IiNGRkQzMDAiLz4KPC9zdmc+Cg==" alt="Getir"></img>
          </a>
          </div>
          <div>
          <a href="/yemek">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yNi4wMzggOS4yNGMwLTIuNzQtMi4yMzctNC41MjctNS41Mi00LjUyNy0zLjExMSAwLTYuMzY3IDIuMjM3LTYuMzY3IDcuMjE1IDAgMy43OTkgMi4zMDMgNi42MDYgNi4yNzUgNi42MDYgMi4yMzcgMCA0LjY5OS0xLjI3MSA1LjMyMi0yLjE0NSAwIDAtLjQyNC0xLjY0Mi0xLjU4OC0xLjY0Mi0uNjA5IDAtMS4wNTkuMjM4LTEuNTYyLjQzNy0uNTE2LjIxMi0xLjEzOC40MS0xLjkzMy40MS0xLjExMiAwLTMuMDE4LS40MzctMy4wMTgtMi44MzMgMCAwIC45LjI2NSAyLjkzOS4yNjUgNC4zOTUuMDEzIDUuNDU0LTEuODQgNS40NTQtMy43ODZ6TTIwLjY1IDcuNjc4YzEuNTA5IDAgMi4yMzcuODIxIDIuMjM3IDEuNTc1IDAgLjg4Ny0uNzk0IDEuNDU2LTIuMjM3IDEuNDU2LTIuMTA1IDAtMi44OTktLjI5MS0yLjg5OS0uMzA1LS4wMTMtMS4yNTguOTkzLTIuNzI3IDIuODk5LTIuNzI3em0xMy41NTYgNy45NDNjLTEuNTA5IDAtMi4yOS0xLjI3MS0yLjQzNi0xLjgyNy0uMTQ2LS41NDMtLjIzOC0xLjMyNC0uMjM4LTIuMTMxbC4wMjYtNC4xMDRoMS4wOTljLjg4NyAwIDEuNTYyLS4yNjUgMi4wNTItLjc4MS40NzctLjUxNi43MjgtMS4yMTguNzI4LTIuMDc4aC0zLjg2NWwtLjAyNi0xLjgxNC4wMTMtMS40MDMuMDQtLjg0Ny4wNTMtLjU0M2MtMS4xNzggMC0yLjA2NS4yNTItMi42ODcuNzU1cy0uOTI3IDEuMzI0LS45MjcgMi40ODlsLS4wMjYgOS4wODFjMCAzLjcyIDEuNzc0IDYuMTQyIDUuMTYzIDYuMTQyIDEuNjY4IDAgMi44ODYtLjkgMi44ODYtMi4yNjQgMC0uNDc3LS4wNjYtLjcyOC0uMTA2LS44ODctLjMwNS4wOC0uODQ3LjIxMi0xLjc0Ny4yMTJ6bTguNDg2LjE3MWMtLjc1NSAwLTEuMjMxLS41NDMtMS4yMzEtMS40NDNWNy43OTdsLjAxMy0xLjQwMy4wNC0uODQ3LjA1My0uNTQzYy0xLjE5MSAwLTIuMDkyLjI1Mi0yLjcxNC43NTVzLS45MjcgMS4zMjQtLjkyNyAyLjQ4OUwzNy45IDE0LjkyYzAgMi4zODMgMS41MzUgMy43MDcgMy40NjggMy42MjcgMS4yMTgtLjA1MyAyLjI3Ny0uNjIyIDIuMjc3LTEuOTA2IDAtLjUyOS0uMDkzLS45NjYtLjA5My0uOTY2LS4yNjUuMDY2LS40NjMuMTE5LS44NjEuMTE5ek01MS4zNjMgNS4wM2MtLjcyOCAwLTEuNDY5LjA3OS0yLjIxMS4yNTItLjc0MS4xNTktMS40MTYuNDc3LTIuMDEyLjk0cy0xLjA4NiAxLjA5OS0xLjQ1NiAxLjkxOS0uNTY5IDEuODY3LS41NjkgMy4xNjR2My43NDZjMCAxLjE1Mi4xNDYgMi4yMjQuODQ3IDIuNzU0Ljc1NS41ODIgMS42NDIuNjA5IDIuODIuNjA5bC0uMDUzLS42NzUtLjA0LS44NDctLjAxMy0xLjQwM3YtNC44MDVjMC0xLjEzOC4xODUtMi41OTUgMi4xODQtMi43NjcgMS4xMjUtLjA5MyAyLjExOC0uNTMgMi4xMTgtMS43NDcgMC0uMjc4LS4wNjYtLjgyMS0uMjEyLTEuMTM4aC0xLjQwM3pNNi4yNDggNC43MTNDMi4xNDUgNC43MTMgMCA3LjU4NSAwIDExLjA4YzAgMy4yMyAxLjk3MiA2LjI2MiA1LjU2IDYuMjYyIDEuODUzIDAgMi45MzktLjc5NCAzLjIwNC0xLjAxOXYxLjYxNWMwIDEuODUzLS43MjggMy4wOTgtMi41OTUgMy4wOTgtLjkgMC0xLjU3NS0uMjUyLTIuMTg0LS41NDMtLjU1Ni0uMjY1LS45NjYtLjU2OS0xLjUwOS0uNTY5LTEuMzkgMC0xLjc3NCAxLjcyMS0xLjc3NCAxLjczNEMxLjc0NyAyMy4wMDcgNC4xNDMgMjQgNi4xNTYgMjRjMy45NTggMCA2LjE0Mi0yLjMwMyA2LjE0Mi02Ljg4NHYtNS4zNjFjLS4wMTMtNC4xODMtMS44NjctNy4wNDMtNi4wNS03LjA0M3ptLS4wMTMgOS41MThjLTEuNTM2IDAtMi43MTQtLjk2Ni0yLjcxNC0zLjA5OCAwLTIuMjc3IDEuMjA1LTMuNDU1IDIuNzE0LTMuNDU1IDEuNDgzIDAgMi41NjguOSAyLjU2OCAzLjI4MyAwIDIuNDM2LTEuMTc4IDMuMjctMi41NjggMy4yN3pNMzguOCAzLjY5M2EyLjA0IDIuMDQgMCAwIDAgLjg4Ny4yMTJjLjcyOCAwIDEuMjk3LS4zNDQgMS43MjEtMS4wMzNhMi4wOCAyLjA4IDAgMCAwIC4yNjUtMS4wMDYgMi4wMyAyLjAzIDAgMCAwLS4yMzgtLjk1MyAxLjYxIDEuNjEgMCAwIDAtLjcxNS0uNjc1QTEuNjkgMS42OSAwIDAgMCAzOS44NTkgMGMtLjMzMSAwLS42NjIuMDkzLS45OC4yNzhzLS41NTYuNDUtLjc0MS43ODFjLS4xNzIuMjkxLS4yNjUuNjM1LS4yNjUgMS4wMDZhMS44NiAxLjg2IDAgMCAwIC4yMzguOTI3Yy4xNTkuMjkxLjM5Ny41My42ODguNzAyeiIgZmlsbD0iI2ZmZDMwMCIvPjxnIGZpbGw9IiNmNGYyZmQiPjxwYXRoIGQ9Ik04MS45NDIgOS40MjljMC0yLjc2Ny0yLjI2NC00LjU2Ny01LjU2LTQuNTY3LTMuMTM3IDAtNi40MiAyLjI1LTYuNDIgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDI0LTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2NS4yNjUgNC40MzUgMCA1LjUwNy0xLjg4IDUuNTA3LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2NCAxLjQ2OS0yLjExOCAwLTIuOTI1LS4yOTEtMi45MjUtLjMwNCAwLTEuMjg0IDEuMDA2LTIuNzUzIDIuOTM5LTIuNzUzem0tOS4yMTQuMDhhMjUuMzEgMjUuMzEgMCAwIDEtLjk1MyAyLjk5MmwtMS4xNjUgMi43OTMtMS4wOTkgMi4zMy0uNzgxIDEuNTc1LTEuNDU2IDIuNzE0Yy0uNDM3LjcyOC0uODYgMS4yOTctMS4yNTggMS43MzQtLjQxLjQzNy0uODIxLjc0MS0xLjIzMS45NC0uNDEuMTg1LS44Ni4yOTEtMS4zMzcuMjkxLS41MTYgMC0uOTQtLjExOS0xLjI0NC0uMzU3LS4zMTgtLjIzOC0uNDc3LS41MDMtLjQ3Ny0uNzgxdi0uODQ3aDEuMDcyYy4yNjUgMCAuNTE2LS4wMjYuNzQxLS4wOTMuMjI1LS4wNTMuNDYzLS4xODUuNzE1LS4zOTdzLjUxNi0uNTMuODA3LS45NTMuNjIyLTEuMDA2IDEuMDA2LTEuNzM0Yy0uNTE2LS43OTQtMS4wMzMtMS43MDgtMS41NjItMi43MTRsLTEuNDgzLTMuMTY0TDU2LjM1NCA4LjlhMjUuNTIgMjUuNTIgMCAwIDEtLjg0Ny0zLjM2MmgxLjI5N2MuNDYzIDAgLjc5NC4xNDYuOTkzLjQzN2EzLjEzIDMuMTMgMCAwIDEgLjQxLjkxM2wuNTgyIDIuMTU4LjgyMSAyLjM1NiAxLjAxOSAyLjM3Yy4zNzEuNzgxLjc2OCAxLjUyMiAxLjE5MSAyLjE5N2wxLjEyNS0yLjI2NCAxLjEzOC0yLjc5My45NTMtMi44NzNjLjI3OC0uOTUzLjQ3Ny0xLjc4Ny41ODMtMi41MjhoLjljLjMwNSAwIC41NTYuMDY2Ljc1NS4yMTJzLjMwNS40MS4zMDUuODA4YzAgLjEzMi0uMDQuMzU3LS4xMDYuNjYybC0uMTcyLjc0MXoiLz48cGF0aCBkPSJNNTguMDIxIDIzLjk1MWMtLjY3NSAwLTEuMjE4LS4xNzItMS42NDEtLjQ5LS41OTYtLjQ1LS43MjgtLjk0LS43MjgtMS4yODR2LTEuNDgzaDEuNzA4YTIuMTMgMi4xMyAwIDAgMCAuNTU2LS4wNjZsLjA0LS4wMTNjLjA5My0uMDI2LjIzOC0uMDc5LjQ1LS4yNjUuMTk5LS4xNTkuNDI0LS40MzcuNjg4LS44MjFhMTUuNTQgMTUuNTQgMCAwIDAgLjc5NC0xLjMzN2wtMS4zOS0yLjQ0OWMtLjUxNi0uOTY2LTEuMDA2LTIuMDI1LTEuNTA5LTMuMjE3bC0xLjI3MS0zLjQxNWMtLjM3MS0xLjExMi0uNjYyLTIuMjc3LS44NjEtMy40NDJsLS4xMzItLjc1NWgyLjA2NWMuODYgMCAxLjI5Ny4zODQgMS41MjIuNzE1bC4wMTMuMDEzYy4yMzguMzcxLjM5Ny43NDEuNDkgMS4wOTl2LjAxM2MuMTMyLjYyMi4zMzEgMS4zMzcuNTY5IDIuMTA1bC44MDcgMi4zMTcgMS4wMDYgMi4zMy41ODMgMS4xNTIuNTY5LTEuMjA1IDEuMTI1LTIuNzUzLjk0LTIuODMzYy4yNzgtLjk2Ni40NjMtMS43NzQuNTY5LTIuNDM2bC4wNzktLjU1NmgxLjQ1NmMuNDUgMCAuODM0LjExOSAxLjEzOC4zMzEuMzcxLjI3OC41NjkuNzE1LjU2OSAxLjMyNCAwIC4xNzItLjA0LjQxLS4xMTkuNzk0bC0uMTg1Ljc2OGEyNS41NyAyNS41NyAwIDAgMS0uOTggMy4wNThsLTEuMTc4IDIuODMzLS4xMTkuMjUyLS45OTMgMi4xMDUtLjI2NS41MTYtLjUxNiAxLjA0Ni0xLjQ4MyAyLjc4Yy0uNDM3LjcxNS0uODg3IDEuMzM3LTEuMzM3IDEuODQtLjQ1LjQ5LS45MjcuODQ3LTEuNDMgMS4wODVsLS4wMTMuMDEzYy0uNDkuMjEyLTEuMDMzLjMzMS0xLjU4OS4zMzF6bS0xLjA3Mi0xLjk4NnYuMjEyYzAgLjA1My4wNTMuMTQ2LjIyNS4yNjUuMTk5LjE1OS40OS4yMjUuODYxLjIyNXMuNzI4LS4wNzkgMS4wNzItLjIyNWMuMzQ0LS4xNzIuNzAyLS40MzcgMS4wMzMtLjc5NC4zODQtLjQyNC43ODEtLjk4IDEuMTc4LTEuNjI4LjQ2My0uNzY4Ljk0LTEuNjY4IDEuNDMtMi42NjFsLjUzLTEuMDcyLjI1Mi0uNTE2Ljk4LTIuMDY1LjExOS0uMjM4IDEuMTUyLTIuNzUzYy4zODQtLjk4LjY4OC0xLjkzMy45MjctMi45MTJ2LS4wMjZhOS43MSA5LjcxIDAgMCAwIC4xNTktLjcwMmwuMDkzLS41M2MwLS4yMjUtLjA1My0uMjkxLS4wNTMtLjI5MS0uMDc5LS4wNTMtLjE5OS0uMDc5LS4zNzEtLjA3OWgtLjM1N2EyMC4zOCAyMC4zOCAwIDAgMS0uNTE2IDIuMDY1bC0uOTY2IDIuOTEyLTEuMTUyIDIuODMzTDYyLjM5IDE2LjNsLS41MjkuOTUzLS41ODItLjkxM2MtLjQyNC0uNjYyLS44MzQtMS40My0xLjIzMS0yLjI2NGwtMS4wMzItMi40MDktLjgzNC0yLjM5Ni0uNTk2LTIuMTk3Yy0uMDUzLS4yMjUtLjE1OS0uNDUtLjMxOC0uNzAyLS4wMjYtLjA0LS4xMTktLjE0Ni0uNDYzLS4xNDZoLS41MTZsLjY3NSAyLjUyOGEzNC4zMSAzNC4zMSAwIDAgMCAxLjIzMSAzLjMwOWwxLjQ1NiAzLjExMSAxLjUzNiAyLjY2MS4xOTkuMzE4LS4xNzIuMzMxLTEuMDQ2IDEuOGMtLjM0NC40OS0uNjM2LjgzNC0uOTI3IDEuMDg2LS4zMzEuMjc4LS42MzUuNDUtLjk2Ni41MjktLjI2NS4wNzktLjU2OS4xMTktLjkuMTE5aC0uNDI0di0uMDUzem00NC4xMjEtMy42NjZjLS40MSAwLS43NTQtLjEzMi0xLjAxOS0uNDFzLS4zOTctLjY2Mi0uMzk3LTEuMTY1di01LjU4NmMwLTEuMzI0LS4yMzgtMi4yNzctLjcxNS0yLjg0NnMtMS4xMzgtLjg0Ny0yLjAxMi0uODQ3Yy0xLjA0NiAwLTEuOC4yNzgtMi4yNjQuODQ3cy0uNzAyIDEuNDk2LS43MDIgMi43NjdWMTguM2gtLjcyOGMtLjUxNiAwLS44ODctLjEzMi0xLjExMi0uNDFzLS4zMzEtLjY2Mi0uMzMxLTEuMTY1di01LjU4NmMwLTEuMTUyLS4yMzgtMi4wNTItLjcyOC0yLjcxNC0uNDktLjY0OS0xLjE5MS0uOTgtMi4xMDUtLjk4LS45NTMgMC0xLjY1NS4yOTEtMi4xMzEuODc0cy0uNzE1IDEuNTIyLS43MTUgMi44MnY3LjE3NWgtLjY4OGMtLjQ2MyAwLS44MjEtLjEzMi0xLjA4NS0uMzg0LS4yNjUtLjI2NS0uMzk3LS42NjItLjM5Ny0xLjE5MXYtNS44NjRjMC0uNzI4LjExOS0xLjQxNi4zNDQtMi4wNzhzLjU1Ni0xLjI0NC45OTMtMS43MzRjLjQzNy0uNTAzLjk4LS44ODcgMS42MTUtMS4xNzguNjQ5LS4yOTEgMS4zNzctLjQzNyAyLjE5Ny0uNDM3Ljk1MyAwIDEuNzM0LjE5OSAyLjM4My41OTYuNjM1LjM5NyAxLjE1Mi45NjYgMS41NDkgMS43MDhBNC43OSA0Ljc5IDAgMCAxIDk0LjY5IDYuMDhjLjcwMi0uNDI0IDEuNDY5LS42MjIgMi4zMDMtLjYyMiAxLjU3NSAwIDIuNzguNDYzIDMuNjAxIDEuNDAzczEuMjMxIDIuMzU2IDEuMjMxIDQuMjQ5djcuMjQxaC0uNzU1di0uMDUzeiIvPjxwYXRoIGQ9Ik0xMDIuNDMzIDE4Ljk2MWgtMS45NzJ2LS4xMzJhMS43NiAxLjc2IDAgMCAxLS44NDctLjUxNmMtLjM3MS0uMzk3LS41NjktLjkyNy0uNTY5LTEuNTg4di01LjU4NmMwLTEuMTY1LS4xOTktMi4wMTItLjU2OS0yLjQ2Mi0uMzU3LS40MjQtLjg0Ny0uNjM1LTEuNTQ5LS42MzUtLjg2IDAtMS40NTYuMTk5LTEuNzg3LjYyMi0uMzcxLjQ1LS41NjkgMS4yODQtLjU2OSAyLjM4M3Y3Ljg1aC0xLjMzN2MtLjcxNSAwLTEuMjQ0LS4yMTItMS41ODgtLjYzNS0uMzE4LS4zODQtLjQ2My0uODg3LS40NjMtMS41NDl2LTUuNTg2YzAtMS4wMzMtLjE5OS0xLjgtLjYwOS0yLjM1Ni0uMzcxLS40OS0uOS0uNzI4LTEuNjE1LS43MjgtLjc1NSAwLTEuMjk3LjIxMi0xLjY2OC42NDktLjM4NC40NjMtLjU4MyAxLjI4NC0uNTgzIDIuNDM2djcuNzg0aC0xLjI4NGMtLjYwOSAwLTEuMTEyLS4xODUtMS41MDktLjU1NmwtLjAxMy0uMDEzYy0uMzg0LS4zODQtLjU2OS0uOTI3LS41NjktMS42MTV2LTUuODY0YTcuNDMgNy40MyAwIDAgMSAuMzcxLTIuMjc3Yy4yNTEtLjc0MS42MjItMS40MDMgMS4xMTItMS45NDYuNDc3LS41NDMgMS4wODYtLjk5MyAxLjgxNC0xLjMyNHMxLjU0OS0uNDkgMi40NDktLjQ5YzEuMDU5IDAgMS45NDYuMjI1IDIuNzAxLjY4OGE0Ljk0IDQuOTQgMCAwIDEgMS4yNTggMS4xNTIgNS4zNyA1LjM3IDAgMCAxIDEuMzI0LTEuMTEyYy43ODEtLjQ3NyAxLjY1NS0uNzE1IDIuNjIxLS43MTUgMS43NjEgMCAzLjEyNC41NDMgNC4wNSAxLjYxNS45MTQgMS4wNDYgMS4zNzcgMi42MDggMS4zNzcgNC42NDZ2Ny44NjNoLjAyNnptLTE3LjY3Mi0xLjQ1NmMuMTU5LjE0Ni4zNzEuMjEyLjY2Mi4yMTJoLjA3OVYxMS4xNWMwLTEuNDU2LjI3OC0yLjUwMi44NDctMy4yMDMuNTk2LS43MjggMS40NjktMS4wOTkgMi41OTUtMS4wOTkgMS4xMTIgMCAxLjk3Mi40MSAyLjU5NSAxLjIxOC41NjkuNzgxLjg0NyAxLjc3NC44NDcgMy4wODR2NS41ODZjMCAuMzU3LjA2Ni42MjIuMTk5Ljc4MS4xMTkuMTU5LjQxLjE4NS42MzUuMTg1aC4xMTlWMTEuMDdjMC0xLjQwMy4yNzgtMi40NjIuODM0LTMuMTUxLjU4Mi0uNzE1IDEuNDk2LTEuMDcyIDIuNzQtMS4wNzIgMS4wNDYgMCAxLjg4LjM1NyAyLjQ3NSAxLjA1OS41ODIuNjg4Ljg2IDEuNzQ3Ljg2IDMuMjN2NS41ODZjMCAuMzQ0LjA4LjU4Mi4yMjUuNzQxYS43NS43NSAwIDAgMCAuNTgzLjIyNWguMTQ1di02LjU3OWMwLTEuNzM0LS4zNTctMy4wMzEtMS4wODUtMy44NTItLjcwMi0uODA4LTEuNzM0LTEuMTkxLTMuMTUxLTEuMTkxLS43NDEgMC0xLjM5LjE3Mi0xLjk4Ni41My0uNjA5LjM3MS0xLjA5OS44Ni0xLjQ1NiAxLjQ1NmwtLjU0My45MjctLjUwMy0uOTRjLS4zNDQtLjY0OS0uNzk0LTEuMTM4LTEuMzM3LTEuNDgzLS41NTYtLjM0NC0xLjIzMS0uNTAzLTIuMDY1LS41MDMtLjc0MSAwLTEuMzc3LjExOS0xLjk0Ni4zODQtLjU4My4yNjUtMS4wMzMuNTk2LTEuNDAzIDEuMDE5YTQuMjcgNC4yNyAwIDAgMC0uODc0IDEuNTM2IDUuNzIgNS43MiAwIDAgMC0uMzE4IDEuODh2NS44NjRjLjAxMy4zNTcuMDkzLjYyMi4yMjUuNzY4em0zMS40NTMtOC4wNzZjMC0yLjc2Ny0yLjI2My00LjU2Ny01LjU1OS00LjU2Ny0zLjEzOCAwLTYuNDIxIDIuMjUtNi40MjEgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDIzLTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2Ni4yNjUgNC40NDcgMCA1LjUwNi0xLjg4IDUuNTA2LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2MyAxLjQ2OS0yLjExOCAwLTIuOTI2LS4yOTEtMi45MjYtLjMwNS4wMTMtMS4yODQgMS4wMTktMi43NTMgMi45MzktMi43NTN6bTEwLjczNS00Ljc4MnY3Ljg3NGMxLjI3My0xLjY2IDIuNTItMy4zNDQgNC4wMy00Ljc5Mi43ODctLjczNiAxLjU3My0uODYxIDIuNjIxLS44NjFoMS44ODR2LjEyNWMtLjkzNi43ODYtMy45OTMgNC4yNTUtNS4zNTMgNS45OWwzLjI1NyAzLjg0M2MxLjE5OCAxLjE5OCAxLjczNCAxLjQ0OCAyLjU0NSAxLjcxLS4zMzcgMS4wNDgtLjg4NiAxLjYxLTIuMjIxIDEuNjEtLjczNiAwLTEuNTg1LS4zMzctMi4xNTktLjkxMS0xLjY4NC0xLjczNS0zLjE1Ny0zLjY5NC00LjYwNC01LjYyOHY2LjQzOWwtMS4wNDguMDI1Yy0xLjUyMy4wMjUtMi4yNDctLjc4Ni0yLjI0Ny0yLjMyMVYuODg4aDEuMDQ5YzEuNTg0IDAgMi4yNDYuOTExIDIuMjQ2IDIuMTg0eiIvPjwvZz48L3N2Zz4=" alt="Getir"></img>
          </a>
          </div>
          <div>
          <a href="/büyük">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjIiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yMC42NDMgNy42ODhjMS41MSAwIDIuMjM0LjgyNCAyLjIzNCAxLjU3MyAwIC44ODYtLjc5OSAxLjQ2LTIuMjQ3IDEuNDYtMi4wOTcgMC0yLjg5NS0uMy0yLjg5NS0uMyAwLTEuMjczLjk5OS0yLjczMyAyLjkwOC0yLjczM3ptNS4zNzkgMS41NmMwLTIuNzMzLTIuMjQ2LTQuNTMtNS41MTYtNC41My0zLjEwOCAwLTYuMzY1IDIuMjM0LTYuMzY1IDcuMjE0IDAgMy44MDcgMi4yOTcgNi42MTUgNi4yNzggNi42MTUgMi4yMzQgMCA0LjY5My0xLjI3MyA1LjMxNy0yLjE0NyAwIDAtLjQyNC0xLjYzNS0xLjU4NS0xLjYzNS0uNjExIDAtMS4wNjEuMjM3LTEuNTYuNDQ5YTQuOTUgNC45NSAwIDAgMS0xLjkzNC4zOTljLTEuMTExIDAtMy4wMi0uNDQ5LTMuMDItMi44MzMgMCAwIC44OTkuMjYyIDIuOTQ1LjI2MiA0LjM4MS0uMDEyIDUuNDQxLTEuODYgNS40NDEtMy43OTR6bTguMTc1IDYuMzc4Yy0xLjUxIDAtMi4yOTYtMS4yNzMtMi40MzQtMS44MjItLjE3Mi0uNjk0LS4yNTYtMS40MDctLjI1LTIuMTIybC4wMjUtNC4wOTRoMS4wOThjLjg4NiAwIDEuNTczLS4yNjIgMi4wNDctLjc3NHMuNzI0LTEuMjExLjcyNC0yLjA4NGgtMy44NjlsLS4wMjUtMS44MjIuMDEyLTEuMzk4LjAzNy0uODQ5YTQuNTIgNC41MiAwIDAgMSAuMDYyLS41NDljLTEuMTczIDAtMi4wNzIuMjUtMi42ODMuNzQ5cy0uOTI0IDEuMzIzLS45MjQgMi40ODRsLS4wMjUgOS4wODZjMCAzLjcxOSAxLjc3MiA2LjE1MyA1LjE1NCA2LjE1MyAxLjY3MiAwIDIuODk1LS44OTkgMi44OTUtMi4yNTlhMi43MSAyLjcxIDAgMCAwLS4xMTItLjg4NiA3LjQ1IDcuNDUgMCAwIDEtMS43MzUuMTg3em04LjQ4Ni4xNzRjLS43NDkgMC0xLjIzNi0uNTQ5LTEuMjM2LTEuNDM1VjcuODEzbC4wMTMtMS4zOTguMDM3LS44NDlhNS4yMSA1LjIxIDAgMCAxIC4wNjItLjU0OWMtMS4xOTggMC0yLjA5Ny4yNS0yLjcwOC43NDlzLS45MjQgMS4zMjMtLjkyNCAyLjQ4NGwtLjAyNSA2LjY3N2MwIDIuMzg0IDEuNTM1IDMuNzA3IDMuNDY5IDMuNjMyIDEuMjIzLS4wNSAyLjI3Mi0uNjI0IDIuMjcyLTEuOTA5YTUuMzQgNS4zNCAwIDAgMC0uMDg3LS45NjFjLS4yODUuMDc1LS41NzkuMTEyLS44NzQuMTEyek0zOC43ODkgMy43MDdhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIyLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMS4wMDMtLjMzMS0uMDc5LS42NTgtLjIzNy0uOTQ5YTEuNjQgMS42NCAwIDAgMC0uNzExLS42ODZBMS42NiAxLjY2IDAgMCAwIDM5Ljg1IDBhMS44NyAxLjg3IDAgMCAwLS45NzQuMjg3IDEuOTQgMS45NCAwIDAgMC0uNzM2Ljc4NiAxLjk3IDEuOTcgMCAwIDAtLjI2MiAxLjAxMSAxLjg2IDEuODYgMCAwIDAgLjIzNy45MzYgMS43OSAxLjc5IDAgMCAwIC42NzQuNjg2em0xMi41NjggMS4zMzVhMTAuMjUgMTAuMjUgMCAwIDAtMi4yMDkuMjUgNS4wNCA1LjA0IDAgMCAwLTIuMDA5LjkzNiA0Ljk0IDQuOTQgMCAwIDAtMS40NiAxLjkyMmMtLjM3NC44MjQtLjU2MiAxLjg3Mi0uNTYyIDMuMTU4djMuNzU3YzAgMS4xNjEuMTUgMi4yMzQuODQ5IDIuNzU4Ljc2MS41NzQgMS42NDcuNTk5IDIuODIxLjU5OS0uMDI1LS4xMTItLjAzNy0uNDQ5LS4wNjItLjY3NGE3LjY2IDcuNjYgMCAwIDEtLjAzOC0uODQ5bC0uMDEyLTEuMzk4di00LjgxOGMwLTEuMTM2LjE4Ny0yLjU5NiAyLjE4NC0yLjc1OCAxLjEyMy0uMSAyLjEyMi0uNTI0IDIuMTIyLTEuNzQ3LS4wMDItLjM4Ny0uMDY5LS43NzEtLjItMS4xMzZoLTEuNDIzek02LjIxNSAxNC4yNGMtMS41MzUgMC0yLjcwOC0uOTczLTIuNzA4LTMuMTA4IDAtMi4yNzEgMS4xOTgtMy40NTcgMi43MDgtMy40NTcgMS40ODUgMCAyLjU3MS44OTkgMi41NzEgMy4yODIgMCAyLjQ0Ni0xLjE3MyAzLjI4Mi0yLjU3MSAzLjI4MnptLjAyNS05LjUyM0MyLjE0NyA0LjcxOCAwIDcuNTg4IDAgMTEuMDgzYzAgMy4yMzMgMS45NzIgNi4yNTMgNS41NTQgNi4yNTMgMS44NiAwIDIuOTMzLS43ODYgMy4yMDctMS4wMjN2MS42MjJjMCAxLjg2LS43MjQgMy4wOTUtMi41OTYgMy4wOTUtLjg5OSAwLTEuNTczLS4yNS0yLjE5Ny0uNTM3LS41NDktLjI2Mi0uOTYxLS41NzQtMS41MS0uNTc0LTEuMzk4IDAtMS43ODUgMS43MjItMS43NzIgMS43MzVDMS43MzUgMjMuMDAyIDQuMTMxIDI0IDYuMTQgMjRjMy45NTYgMCA2LjE0LTIuMzA5IDYuMTQtNi44ODl2LTUuMzU0Yy0uMDEyLTQuMTgxLTEuODYtNy4wMzktNi4wNDEtNy4wMzl6IiBmaWxsPSIjZmZkMTBkIi8+PHBhdGggZD0iTTcxLjc3NSAzLjcwN2ExLjk3IDEuOTcgMCAwIDAgLjg4Ni4yMTJjLjcyNCAwIDEuMjk4LS4zNDkgMS43MjItMS4wMzYuMTc0LS4zMDguMjY0LS42NTcuMjYyLTEuMDExLjAwMy0uMzMxLS4wNzktLjY1OC0uMjM3LS45NDlhMS42NCAxLjY0IDAgMCAwLS43MTEtLjY4NkExLjY2IDEuNjYgMCAwIDAgNzIuODM2IDBhMS44NyAxLjg3IDAgMCAwLS45NzMuMjg3IDEuOTQgMS45NCAwIDAgMC0uNzM2Ljc4NiAxLjk3IDEuOTcgMCAwIDAtLjI2MiAxLjAxMSAxLjg3IDEuODcgMCAwIDAgLjIzNy45MzYgMS45NyAxLjk3IDAgMCAwIC42NzQuNjg2em01LjI4IDBhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIyLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMS4wMDMtLjMzMS0uMDc5LS42NTgtLjIzNy0uOTQ5LS4xNjEtLjI5Ni0uNDEtLjUzNi0uNzExLS42ODZBMS42NiAxLjY2IDAgMCAwIDc4LjExNSAwYTEuODcgMS44NyAwIDAgMC0uOTczLjI4NyAxLjk0IDEuOTQgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NiAxLjg2IDAgMCAwIC4yMzcuOTM2IDEuNzkgMS43OSAwIDAgMCAuNjc0LjY4NnptMjAuOTU0IDBhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIzLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMWExLjk1IDEuOTUgMCAwIDAtLjIzNy0uOTQ5Yy0uMTYxLS4yOTYtLjQxLS41MzYtLjcxMi0uNjg2QTEuNjYgMS42NiAwIDAgMCA5OS4wNyAwYTEuODcgMS44NyAwIDAgMC0uOTc0LjI4NyAxLjk1IDEuOTUgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NiAxLjg2IDAgMCAwIC4yMzcuOTM2IDEuNzkgMS43OSAwIDAgMCAuNjc0LjY4NnptNS4yNjcgMGExLjk3IDEuOTcgMCAwIDAgLjg4Ni4yMTJjLjcyNCAwIDEuMjk4LS4zNDkgMS43MjMtMS4wMzYuMTczLS4zMDguMjY0LS42NTcuMjYyLTEuMDExYTEuOTQgMS45NCAwIDAgMC0uMjM4LS45NDkgMS42NCAxLjY0IDAgMCAwLS43MTEtLjY4NiAxLjY2IDEuNjYgMCAwIDAtLjg2MS0uMjM3Yy0uMzQ1LjAwNC0uNjgyLjEwNC0uOTc0LjI4N2ExLjk1IDEuOTUgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NSAxLjg1IDAgMCAwIC4yMzYuOTM0IDEuODQgMS44NCAwIDAgMCAuNjc1LjY4OHpNNjEuMTQyIDcuNjM4Yy0xLjY2IDAtMi45MDggMS42MzUtMi45MDggMy42OTQgMCAzLjAzMyAxLjI5OCA0LjI4MSAzLjI1NyA0LjI4MSAxLjYzNSAwIDIuODIxLTEuNTcyIDIuODIxLTMuNjk0LS4wMTMtMy4yMDctMS4xNjEtNC4yODEtMy4xNy00LjI4MXptMCAxMC44OTZjLTMuMzgyIDAtNi4yMTUtMi43NzEtNi4yMTUtNi43MjdWLjYxMmgxLjEyM2MxLjI3MyAwIDIuMTU5LjczNiAyLjE1OSAyLjI3MXYzLjg0NGMuNjYxLS45NDkgMS43ODUtMi4wMDkgMy41NjktMi4wMDkgMy4zNTcgMCA1LjkyOCAyLjc0NiA1LjkyOCA2LjYyNyAwIDMuOTgxLTIuNTQ2IDcuMTg5LTYuNTY1IDcuMTg5em04LjQ0OS02LjIxNlY3LjM2NGMwLTEuNTQ4LjgxMS0yLjM0NiAyLjcyMS0yLjM0NmguNTg3djcuNDEzYzAgMi4yNDYuOTQ4IDMuMTgzIDIuMjk2IDMuMTgzIDEuNDk4IDAgMi42NzEtLjk3NCAyLjY3MS0zLjQwN1Y3LjM2NGMwLTEuNTQ4LjgzNi0yLjM0NiAyLjcyMS0yLjM0NmguNjExdjcuNTEzYzAgMy44NDQtMi41NzEgNS45OTEtNS44MjggNS45OTEtMy44NDQuMDEyLTUuNzc4LTIuMDk3LTUuNzc4LTYuMjAzem0yNi4xODQgMFY3LjM2NGMwLTEuNTQ4LjgxMS0yLjM0NiAyLjcyMS0yLjM0NmguNTg3djcuNDEzYzAgMi4yNDYuOTQ4IDMuMTgzIDIuMjk2IDMuMTgzIDEuNDk4IDAgMi42NzEtLjk3NCAyLjY3MS0zLjQwN1Y3LjM2NGMwLTEuNTQ4LjgzNi0yLjM0NiAyLjcyMS0yLjM0NmguNjExdjcuNTEzYzAgMy44NDQtMi41NzEgNS45OTEtNS44MjggNS45OTEtMy44NDQuMDEyLTUuNzc5LTIuMDk3LTUuNzc5LTYuMjAzek04NS4zNDIgMjIuNTE1Yy0xLjIyMyAwLTIuMjk2LS44MTEtMi4yOTYtMi4wMzR2LS42MzZsMS44Ni0uMTI1YzEuMTk4LS4wNzUgMS42MS0uNTYyIDIuMzIxLTIuNDIxLTEuNzM1LTIuNjIxLTQuMjMxLTkuMTczLTQuNjgtMTIuMjgxaDEuNzM1Yy40NDktLjAwNy44ODcuMTQ0IDEuMjM2LjQyN3MuNTg4LjY4LjY3NCAxLjEyMWMuNDYyIDIuNTQ2IDEuNDQ4IDUuMjkyIDIuNjQ2IDcuNjEzIDEuMDczLTIuNDcxIDIuMjcxLTYuNDY1IDIuNTcxLTkuMTQ4aDEuNDIzYzEuMDQ4IDAgMS41NDguNDYyIDEuNTQ4IDEuNTQ4IDAgMS4zOTgtMi4yOTYgNy40MTMtMi45MDggOC44MzYtMi40NDYgNS43NTMtMy43NDQgNy4xMDEtNi4xMjggNy4xMDF6bTI3LjI5NC0xOS43MTl2Ny44NzVjMS4yNzMtMS42NiAyLjUyMS0zLjM0NSA0LjAzMi00Ljc5My43ODYtLjczNiAxLjU3Mi0uODYxIDIuNjIxLS44NjFoMS44ODR2LjEyNWMtLjkzNi43ODYtMy45OTQgNC4yNTYtNS4zNTQgNS45OTFsMy4yNTcgMy44NDRjMS4xOTggMS4xOTggMS43MzUgMS40NDggMi41NDYgMS43MS0uMzM3IDEuMDQ4LS44ODYgMS42MS0yLjIyMSAxLjYxYTMuMiAzLjIgMCAwIDEtMi4xNTktLjkxMWMtMS42ODUtMS43MzUtMy4xNTgtMy42OTQtNC42MDYtNS42Mjl2Ni40NGwtMS4wNDguMDI1Yy0xLjUyMy4wMjUtMi4yNDYtLjc4Ni0yLjI0Ni0yLjMyMVYuNjEyaDEuMDQ4YzEuNTg1IDAgMi4yNDYuOTExIDIuMjQ2IDIuMTg0eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="Getir"></img>
          </a>  
          </div>
              
          </div>
        <nav className='flex gap-x-8 text-sm font-semibold '>
          <a href="#" className='flex items-center gap-x-2 text-white transition-all text-opacity-75 
          hover:text-opacity-100'>
            <FiGlobe /> Türkçe (TR)
          </a>
          <a href="#" className='flex items-center gap-x-2 text-white transition-all text-opacity-75 
          hover:text-opacity-100'>
            <FaUser /> Giriş Yap
          </a>
          <a href="#" className='flex items-center gap-x-2 text-white transition-all text-opacity-75 
          hover:text-opacity-100'>
            <FaUser /> Kayıt Ol
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header