import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1+    / описать типы AffairPriorityType, AffairType
* 2+    / указать нужный тип для defaultAffairs
* 3+    / дописать типы и логику функции filterAffairs и проверить её тестами
* 4+    / выполнить пункт 3 для функции deleteAffair
* 5+    / указать нужный тип в useState с affairs
* 6+    / дописать тип и логику функции deleteAffairCallback
* 7+    / в файле Affairs.tsx дописать типизацию пропсов
* 8+    / в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 / в файле Affair.tsx дописать типизацию пропсов
* 10 / в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 / в файле Affair.tsx отобразить приходящие данные
* */

//+ types
// тип priority из исходных данных
export type AffairPriorityType = string //+ need to fix any
// тип объектов из исходных данных
export type AffairType = {
    _id: number //+ need to fix any
    name: string //+ need to fix any
    priority: AffairPriorityType
}
// тип значения в фильтре
export type FilterType = 'all' | AffairPriorityType

//+ constants
// исходные данные - массив объектов
const defaultAffairs: Array<AffairType> = [ //+ need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

//+ pure helper functions
// функция, фильтрующая массив объектов по фильтру
export const filterAffairs = (affairs: Array<AffairType>, filter: AffairPriorityType): Array<AffairType> => { //+ need to fix any
    let filteredAffairsByPriority: Array<AffairType> = defaultAffairs
    if (filter === 'low') {
        filteredAffairsByPriority = affairs.filter(el => el.priority === 'low')
    }
    if (filter === 'middle') {
        filteredAffairsByPriority = affairs.filter(el => el.priority === 'middle')
    }
    if (filter === 'high') {
        filteredAffairsByPriority = affairs.filter(el => el.priority === 'high')
    }
    return filteredAffairsByPriority //+ need to fix
}
// функция, удаляющая из массива объект по ид и возвращающая новый массив без него
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { //+ need to fix any
    let affairsAfterDeleteAffair = affairs.filter(el => el._id !== _id)
    return affairsAfterDeleteAffair //+ need to fix
}
// сама компонента
function HW2() {
    //стэйт массива объектов
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) //+ need to fix any
    //стэйт фильтра
    const [filter, setFilter] = useState<FilterType>('all')
    // отфильтрованный по фильтру массив
    const filteredAffairs = filterAffairs(affairs, filter)    
    // функция, меняющая массив объектов после удаления объекта по ид
    const deleteAffairCallback = (_id: number) => { //+ need to fix any
        debugger
        setAffairs(deleteAffair(affairs, _id))//+ need to fix
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                {/* компонента */}
                <Affairs
                    /* отфильтрованный по фильтру массив */
                    data={filteredAffairs}
                    /* функция, меняющая значение фильтра */
                    setFilter={setFilter}
                    /* функция, меняющая массив объектов после удаления объекта по ид */
                    deleteAffairCallback={deleteAffairCallback}
                    /* значение фильтра */
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
