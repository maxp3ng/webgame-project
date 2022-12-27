// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

            //palette colors
            let color1 = [244, 241, 222]
            let color2 = [224, 122, 95]
            let color3 = [61, 64, 91]
            let color4 = [129, 178, 154]
            let color5 = [242, 204, 143]
           
            // initialize kaboom context
            kaboom()

            loadSound("theme", "sounds/theme.mp3")
            play("theme")
            const music = play("theme", {
                volume: 1,
                loop:true
            })
            
        scene('start', () => {
            play("theme");
            add([
            color(color2),
             rect(width(), height()),
             pos(0, 0),
             outline(4),
            ])

            add([
            color(color1),
            text("GAME NAME"),
            pos(width()/2 - 200, height()/2 - 250),
            ])
            
            const start_button = add([
            color(color1),
            text("Start", {
                size:50,
            }),
            pos(width()/2 - 75, height()/2-125),
            area(),
            ])
            start_button.onClick(() => go("settings_menu"))
            
            const setting_button = add([
            color(color1),
            text("Settings", {
                size:50,
            }),
            pos(width()/2 - 115, height()/2 - 50),
            area(),            
            ])
            setting_button.onClick(() => go("credit_menu"))

            const play_button = add([
            color(color1),
            text("How to Play", {
                size:50,
            }),
            pos(width()/2 - 160, height()/2 + 25),
            area(),            
            ])
            play_button.onClick(() => go("how_to_menu"))

        })
        

        scene("game_menu", () => {
            add([
            color(color4),
             rect(width(), height()),
             pos(0, 0),
             outline(4),
            ])
        });

        scene("settings_menu", () => {
            add([
            color(color5),
             rect(width(), height()),
             pos(0, 0),
             outline(4),
            ])
        });

        scene("credit_menu", () => {
            add([
            color(color1),
             rect(width(), height()),
             pos(0, 0),
             outline(4),
            ])
        });

        scene("how_to_menu", () => {
            add([
            color(color2),
             rect(width(), height()),
             pos(0, 0),
             outline(4),
            ])
        });

        go('start')  