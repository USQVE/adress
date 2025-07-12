import React, { useState, useEffect, useRef } from "react";

// 🔡 Список адресов (примерные данные)
const addressList = [
  "Гагарина 2Б",
  "Гагарина 2Д",
  "Гагарина 4",
  "Гагарина 5",
  "Гагарина 10А",
  "Гагарина 10Б",
  "Гагарина 10В",
  "Гагарина 9",
  "Серебровская 2А",
  "Серебровская 2Б",
  "Серебровская 2",
  "Серебровская 6",
  "Транспортный переулок 1",
  "Транспортный переулок 2",
  "Гагарина 11",
  "Гагарина 14",
  "Гагарина 16",
  "Гагарина 18",
  "Гагарина 20",
  "Гагарина 20A",
  "Маяковского 7",
  "Маяковского 8",
  "Маяковского 10",
  "Маяковского 9",
  "Выборгский переулок 4",
  "Выборгский переулок 6",
  "Выборгский переулок 5",
  "Выборгский переулок 3А",
  "Выборгский переулок 2",
  "Маяковского 4/17",
  "Серебровская 12",
  "Маяковского 3/19",
  "Гагарина 21",
  "Маяковского 1",
  "Серебровская 14",
  "Серебровская 16",
  "Серебровская 18",
  "Серебровская 20",
  "Кочешкова 6",
  "Кочешкова 8",
  "Гагарина 27А",
  "Гагарина 29-3",
  "Гагарина 27",
  "Гагарина 24",
  "Гагарина 28",
  "Гагарина 30",
  "Гагарина 26",
  "Кочешкова 16",
  "Гагарина 29-2",
  "Гагарина 29-1",
  "Гагарина 29-4",
  "Кочешкова 11",
  "Кочешкова 15",
  "Кочешкова 11А",
  "Кочешкова 7",
  "Подгорная 2А",
  "Подгорная 1",
  "Подгорная 2",
  "Подгорная 4",
  "Подгорная 3",
  "Подгорная 5",
  "Подгорная 7",
  "Подгорная 8",
  "Прохладная 2",
  "Прохладная 1-1",
  "Прохладная 4А",
  "Прохладная 1-2",
  "Прохладная 4",
  "Прохладная 3-1",
  "Прохладная 3-2",
  "Прохладная 6",
  "Прохладная 6А",
  "Прохладная 7-2",
  "Прохладная 7-1",
  "Прохладная 10",
  "Прохладная 7-3",
  "Прохладная 9-1",
  "Прохладная 9-2",
  "Прохладная 12-1",
  "Прохладная 9-3",
  "Прохладная 12-2",
  "Прохладная 9-4",
  "Переулок Подгорный 2",
  "Переулок Подгорный 3",
  "Переулок Подгорный 4",
  "Переулок Подгорный 5",
  "Переулок Подгорный 7",
  "Переулок Подгорный 8",
  "Переулок Подгорный 9",
  "Переулок Подгорный 10",
  "Прохладная 5А",
  "Подгорная 19",
  "Подгорная 17",
  "Черноморская 33-3",
  "Подгорная 15",
  "Подгорная 14",
  "Подгорная 12А",
  "Подгорная 13",
  "Подгорная 12",
  "Подгорная 11А",
  "Подгорная 11",
  "Подгорная 10",
  "Подгорная 9",
  "Черноморская 33-2",
  "Черноморская 33-1",
  "Черноморская 33-4",
  "Черноморская 31",
  "Черноморская 30",
  "Подгорная 19Б",
  "Подгорная 16А",
  "Подгорная 19В",
  "Подгорная 19Д",
  "Подгорная 21-1",
  "Подгорная 18-1",
  "Подгорная 18-2",
  "Подгорная 21-2",
  "Подгорная 20А-1",
  "Подгорная 23-1",
  "Подгорная 23-2",
  "Подгорная 20А-2",
  "Подгорная 20-1",
  "Подгорная 25-1",
  "Подгорная 20-2",
  "Подгорная 20-3",
  "Подгорная 25-2",
  "Подгорная 27-1",
  "Кочешкова 27-4",
  "Кочешкова 29-3",
  "Подгорная 27-2",
  "Подгорная 29",
  "Кочешкова 29-4",
  "Подгорная 31",
  "Подгорная 31А",
  "Советская 31",
  "Подгорная 33",
  "Хмельницкого 2/42-2",
  "Хмельницкого 1-1",
  "Хмельницкого 1-2",
  "Хмельницкого 2/42-1",
  "Донского 7",
  "Донского 2",
  "Донского 4",
  "Донского 9-1",
  "Донского 6-1",
  "Донского 3",
  "Донского 9-2",
  "Донского 11-1",
  "Донского 8-1",
  "Декабристов 6-3",
  "Декабристов 5-2",
  "Декабристов 3",
  "Декабристов 1-2",
  "Декабристов 1-1",
  "Советская 46-1",
  "Декабристов 2-1",
  "Донского 11-2",
  "Донского 13-1",
  "Донского 8-2",
  "Донского 13-2",
  "Донского 10-1",
  "Донского 10-2",
  "Донского 15-1",
  "Донского 15-2",
  "Донского 12-1",
  "Донского 17-1",
  "Донского 17-2",
  "Донского 19-1",
  "Донского 19-2",
  "Донского 21-2",
  "Донского 23-1",
  "Донского 23-2",
  "Донского 12-2",
  "Советская 48А",
  "Советская 48",
  "Советская 46-2",
  "Советская 44-1",
  "Советская 44-2",
  "Кочешкова 29-2",
  "Кочешкова 29-1",
  "Кочешкова 27-3",
  "Кочешкова 36-2",
  "Кочешкова 27-1",
  "Кочешкова 36-1",
  "Кочешкова 34-2А",
  "Кочешкова 34-2",
  "Кочешкова 34-1",
  "Кочешкова 25-1",
  "Кочешкова 32-2",
  "Кочешкова 1",
  "Кочешкова 23",
  "Кочешкова 32-3",
  "Кочешкова 32-1",
  "Черноморская 26Б",
  "Кочешкова 21",
  "Кочешкова 30",
  "Кочешкова 28",
  "Школа",
  "Кочешкова 32-4",
  "Кочешкова 18",
  "Серебровская 24",
  "Серебровская 26",
  "Серебровская 28"
];

// 🔁 Имитация русской раскладки с англ. клавиатуры
const layoutMap = {
  'f': 'а', 'i': 'ш', 's': 'ы', 'v': 'м', 'l': 'д', 't': 'е', 'u': 'г',
  'e': 'у', 'a': 'ф', 'r': 'к', 'n': 'т', 'y': 'н', 'g': 'п', 'd': 'в',
  'o': 'щ', 'z': 'я', 'h': 'р', 'c': 'с', 'm': 'ь', 'w': 'ц', 'x': 'ч',
  'j': 'о', 'q': 'й', 'b': 'и', 'k': 'л', "'": 'э', '`': 'ё', 'p': 'з',
  ']': 'ъ', '[': 'х', ';': 'ж', '.': 'ю', ',': 'б'
};

// 💬 Транслитерация латиницы в кириллицу (простой вариант)
const transliterate = (text) => {
  const map = {
    yo: 'ё', zh: 'ж', ch: 'ч', sh: 'ш', shch: 'щ', yu: 'ю', ya: 'я',
    a: 'а', b: 'б', v: 'в', g: 'г', d: 'д', e: 'е', z: 'з', i: 'и', y: 'й',
    k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т',
    u: 'у', f: 'ф', h: 'х', c: 'ц'
  };

  let result = '';
  let i = 0;
  text = text.toLowerCase();
  while (i < text.length) {
    const four = text.slice(i, i + 4);
    if (map[four]) {
      result += map[four];
      i += 4;
    } else {
      const two = text.slice(i, i + 2);
      if (map[two]) {
        result += map[two];
        i += 2;
      } else {
        result += map[text[i]] || text[i];
        i++;
      }
    }
  }
  return result;
};

// ✨ Нормализация текста
const normalize = (text) => text.replace(/\s|,|\.|-|_/g, '').toLowerCase();

export default function SearchDirectory() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(addressList);
  const [highlightIndex, setHighlightIndex] = useState(null);
  const itemRefs = useRef([]);

  // 🔄 Обновляем ссылки после фильтрации
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, filtered.length);
  }, [filtered]);

  const getVariants = (text) => {
    // Разбиваем запрос на слова (по пробелам) и на буквы/цифры
    let words = text.trim().split(/\s+/);
    
    // Дополнительно разбиваем каждое слово на части: буквы и цифры
    const expandedWords = [];
    words.forEach(word => {
      // Разбиваем слово на части: буквы отдельно, цифры отдельно
      const parts = word.split(/(\d+)/).filter(part => part.length > 0);
      expandedWords.push(...parts);
    });
    
    words = expandedWords.filter(word => word.length > 0);
    
    return words.map(word => {
      const normalized = normalize(word);
      const translit = normalize(transliterate(word));
      const remapped = normalize(
        word.split('').map(c => layoutMap[c] || c).join('')
      );
      return [normalized, translit, remapped];
    });
  };

  // Функция для более точного поиска
  const isExactMatch = (query, address) => {
    const queryNorm = normalize(query);
    const addressNorm = normalize(address);
    
    // Если запрос полностью содержится в адресе как подстрока
    const variants = getVariants(query);
    return variants.some(variantGroup => 
      variantGroup.some(variant => variant && addressNorm.includes(variant))
    );
  };
  const handleSearch = () => {
    // Сначала пробуем точный поиск по всему запросу
    for (let i = 0; i < filtered.length; i++) {
      if (isExactMatch(query, filtered[i])) {
        setHighlightIndex(i);
        itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    
    // Если точный поиск не дал результата, используем поиск по словам
    const wordVariants = getVariants(query);
    for (let i = 0; i < filtered.length; i++) {
      const target = normalize(filtered[i]);
      // Проверяем, что все слова найдены в адресе
      const allWordsFound = wordVariants.every(variants => 
        variants.some(v => v && target.includes(v))
      );
      if (allWordsFound) {
        setHighlightIndex(i);
        itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    setHighlightIndex(null);
    alert("Ничего не найдено.");
  };

  useEffect(() => {
    if (!query) {
      setFiltered(addressList);
      setHighlightIndex(null);
      return;
    }
    const wordVariants = getVariants(query);
    const result = addressList.filter(addr => {
      const target = normalize(addr);
      // Проверяем, что все слова найдены в адресе
      return wordVariants.every(variants => 
        variants.some(v => v && target.includes(v))
      );
    });
    setFiltered(result);
    setHighlightIndex(null);
  }, [query]);

  useEffect(() => {
    const handler = e => e.key === 'Enter' && handleSearch();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [query, filtered]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
            📮 Каталог корреспонденции
          </h2>
          
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-4 text-lg border-2 border-slate-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-200 font-mono"
              placeholder="Введите адрес или часть (например, 'сере 28', 'arbat', 'fh,fn')"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <p className="text-sm text-slate-600 mt-2">
              💡 Поддерживает: кириллицу, латиницу, английскую раскладку
            </p>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
              onClick={handleSearch}
            >
              🔍 Найти
            </button>
            <button
              className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
              onClick={() => {
                setQuery('');
                setFiltered(addressList);
                setHighlightIndex(null);
              }}
            >
              🔄 Сбросить
            </button>
          </div>

          <div className="text-sm text-slate-600 mb-4">
            Найдено результатов: <span className="font-semibold">{filtered.length}</span> из {addressList.length}
          </div>

          <div className="max-h-96 overflow-y-auto border rounded-lg">
            <ul className="space-y-1 p-2">
              {filtered.map((address, index) => {
                // Находим оригинальный индекс в полном списке
                const originalIndex = addressList.indexOf(address);
                return (
                <li
                  key={originalIndex}
                  ref={el => itemRefs.current[index] = el}
                  className={`p-3 rounded-lg border transition-all duration-200 font-mono ${
                    highlightIndex === index
                      ? 'bg-yellow-100 border-yellow-400 font-bold shadow-md'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-slate-500 font-semibold">
                    Ячейка {originalIndex + 1}
                  </span>
                  <span className="text-slate-600 mx-2">—</span>
                  <span className="text-slate-800">
                    {address}
                  </span>
                </li>
                );
              })}
            </ul>
          </div>

          {filtered.length === 0 && query && (
            <div className="text-center py-8 text-slate-500">
              <div className="text-4xl mb-2">🔍</div>
              <p>Ничего не найдено по запросу "{query}"</p>
              <p className="text-sm mt-2">Попробуйте изменить поисковый запрос</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}