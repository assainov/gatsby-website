import React, { useState } from "react"
import { Link } from 'gatsby'
import styles from './article-list.module.scss'
import ToggleButton from 'react-toggle-button'
import Arrow from '../../assets/icons/arrow-down.svg'
import Moon from '../../assets/icons/moon.svg'
import Sun from '../../assets/icons/sun.svg'
import ArticleCard from '../article-card'

export default () => {
    const [dropdown, setDropdown] = useState('date');
    const [darkModeOn, setDarkMode] = useState(false);

    const handleDropdownChange = (event) => {
        setDropdown(event.target.value);
    }

    return (
        <div className={styles.articleList}>
            <div className={styles.controls}>
                <div className={styles.sorting}>
                    <select 
                        className={styles.dropdown} 
                        value={dropdown} 
                        onChange={handleDropdownChange}
                    >
                        <option value="date">Sort by date </option>
                        <option value="popularity">Sort by popularity</option>
                    </select>
                    <Arrow className={styles.dropdownArrow} />
                </div>
                <ToggleButton
                    activeLabel={<Moon style={{transform: 'translateY(-1px)'}} />}
                    inactiveLabel={<Sun style={{transform: 'translateY(-1px)'}} />}
                    containerStyle={{width:'72px'}} 
                    trackStyle={{width:'72px'}} 
                    thumbAnimateRange={[1, 44]} 
                    activeLabelStyle={{ width:'40px' }} 
                    inactiveLabelStyle={{ width:'40px' }}
                    colors={{
                        activeThumb: {
                          base: 'rgb(0, 0, 0)',
                        },
                        inactiveThumb: {
                          base: 'rgb(255, 255, 255)',
                        },
                        active: {
                          base: 'rgb(255, 255, 255)',
                        },
                        inactive: {
                          base: 'rgb(0, 0, 0)',
                        }
                    }}
                    thumbStyle={{
                        borderRadius: '2px', 
                        border: '1px solid #FFF',
                        height: '28px',
                        width: '28px'
                    }}
                    trackStyle={{
                        borderRadius: '2px', 
                        border: '1px solid var(--primary-color)',
                        height: '30px',
                        width: '72px'
                    }}
                    value={ darkModeOn }
                    onToggle={(value) => {
                        setDarkMode(!value)
                    }} 
                />
            </div>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    )
}
