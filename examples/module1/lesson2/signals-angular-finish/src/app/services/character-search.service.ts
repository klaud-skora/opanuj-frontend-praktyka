import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Character } from '../types/Character';
import { combineLatest, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private charactersSource: Signal<Character[]> = signal([]);
  private nameSubject = signal('');
  private genderSubject = signal('');
  private sortOptionSubject = signal('');
  characters: Signal<Character[]> = signal([]);
  charactersNew: Signal<Character[]> = signal([]);

  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
    this.charactersSource = toSignal(
      combineLatest([
        toObservable(this.nameSubject),
        toObservable(this.genderSubject)])
        .pipe(switchMap(([name, age]) => {
          if (name !== '' || age !== '') {
            return this.http
              .get<{ results: Character[] }>(
                `${this.apiBaseUrl}?name=${name}&gender=${age}`
              )
              .pipe(map((response) => response.results || []));
          } else {
            return of([]);
          }
      })), { initialValue: [] }
    );

    this.characters = computed(() => {
      return this.sortCharacters(this.charactersSource(), this.sortOptionSubject());
    });

  }

  setName(name: string) {
    this.nameSubject.set(name);
  }

  setGender(gender: string) {
    this.genderSubject.set(gender);
  }

  setSortOption(sortOption: string) {
    this.sortOptionSubject.set(sortOption);
  }

  get name(): string {
    return this.nameSubject();
  }

  get gender(): string {
    return this.genderSubject();
  }

  get sortOption(): string {
    return this.sortOptionSubject();
  }

  sortCharacters(characters: Character[], sortOption: string): Character[] {
    return [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    });
  }
}
