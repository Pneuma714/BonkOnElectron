document.addEventListener('readystatechange', () => {
    ['adboxverticalCurse', 'adboxverticalleftCurse', 'descriptioncontainer', 'bonkioheader'].forEach(id => {
        document.getElementById(id).style.display = 'none'
    })
    
    document.documentElement.style.overflowY = 'hidden'

    document.getElementById('maingameframe').addEventListener('load', () => {
        const frame = document.getElementById('maingameframe')
        const bonk = frame.contentWindow.document.getElementById('bonkiocontainer')

        setInterval(() => {
            if (bonk.style.height === '100vh' || bonk.style.width === '100vw') return

            if (frame.contentWindow.document.documentElement.clientWidth * 0.685 > frame.contentWindow.document.documentElement.clientHeight) {
                bonk.style.height = '100vh'
                bonk.style.width = Math.round(bonk.clientHeight / 0.685) + 'px'
            }
            else {
                bonk.style.width = '100vw'
                bonk.style.height = Math.round(bonk.clientWidth * 0.685) + 'px'
            }

            bonk.style.border = 'none'
            frame.style.marginTop = '0'
        }, 100)
    })

})

