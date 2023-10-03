import React, { useState} from 'react';
import styles from './Body.module.css'
// import { Game } from '../HumanGame'

// export const Body = () => {
//     useEffect(() => {
//         const getElemFromHTML = (element) => document.querySelector(element);
//         console.log(getElemFromHTML('#word_display'));
//       }, []);
//     return (
//         <div className={styles.body__conteiner}>
//             <div id={styles.word_display}>
//                 <Game/> 
//             </div>
//             <input type="text" id={styles.letter_input} maxLength="1" placeholder="Введите букву" />
//             <button id={styles.check_letter}>Проверить</button>
//             <div  id={styles.result}>Угадай животное :)</div>
//             <button id={styles.reset_game}>Играть заново</button>
//         </div>
//     )
// }


export const Body = () => {
    let firstTeamScore;
    let secondTeamScore;

    const [gameLog, setGameLog] = useState([]); 

    function getResultText(text) {
        setGameLog(prevLog => [...prevLog, text]);
    }

    // function getResultText(text) {
    //     // setGameLog(prevLog => [...prevLog, text]);
    //     console.log(text);
    // }

    function getRandomZone() {
        return Math.floor(Math.random() * 4) + 1;
    }

    function gameZonePlay(attackingTeam) {
        let ballZone = getRandomZone();
        let notGuardedZones =  getRandomZone();
        let defendingTeam = (attackingTeam === 1) ? 2 : 1;
        getResultText("Подача");
        getResultText(`Место удара команды №${attackingTeam}: ${ballZone}`);
        getResultText(`Пустая зона команды №${defendingTeam}: ${notGuardedZones}`);

        if (notGuardedZones === ballZone) {
            getResultText(`Очко команде №${attackingTeam} за успешную атаку`);
            return true; 
        } else {
            getResultText(`Команда №${defendingTeam} отбила`);
            return false; 
        }
    }

    function matchPoint(attackingTeam) {
        if (attackingTeam === 1) {
            firstTeamScore++;
        } else {
            secondTeamScore++;
        }
        getResultText(`Очки первой команды: ${firstTeamScore}, Очки второй команды: ${secondTeamScore}`);
    }

    function startGame(){
        const confirmed = window.confirm("Вы уверены, что хотите начать игру?");
        if (!confirmed) {
            return; 
        }

        firstTeamScore = 0;
        secondTeamScore = 0;
        setGameLog([]);
        while (firstTeamScore < 3 && secondTeamScore < 3) {
            let attackingTeam = 1;
            while (true) {
                if (gameZonePlay(attackingTeam)) {
                    matchPoint(attackingTeam);
                    if (firstTeamScore == 3 || secondTeamScore == 3) {
                        getResultText("Последнее очко забито");
                        break;
                    }
                }
                attackingTeam = (attackingTeam === 1) ? 2 : 1;
            }
        }

        if (firstTeamScore > secondTeamScore) {
            getResultText("Команда 1 победила!");
        } else {
            getResultText("Команда 2 победила!");
        }
    }
    return (
        <div className={styles.main}>
            <button onClick={startGame} className={styles.button_start}>Начать игру</button>
            <div id="textDiv"> 
            {gameLog.map((log, index) => (
                    <p key={index}>{log}</p>
                ))}
            </div>
        </div>
    );
};