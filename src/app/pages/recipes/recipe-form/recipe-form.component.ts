import { Component, EventEmitter, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rcp-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: [ './recipe-form.component.scss' ],
  standalone: false
})
export class RecipeFormComponent implements OnInit {
  @Output() submitRecipe = new EventEmitter<any>();

  public form!: FormGroup;
  public summary: WritableSignal<string> = signal('')

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [ '', Validators.required ],
      description: [ '' ],
      ingredients: this.fb.array([
        this.fb.control('', Validators.required)
      ]),
      instructions: [ '' ],
      imageUrl: [ '' ]
    });
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      this.submitRecipe.emit(this.form.value);
      this.form.reset();
    }
  }
}
